import express from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

const CLIENT_ID = "62471726684-dns9ssnnbqi81q5l031m78nct7d9mq4i.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

router.post("/google", async (req, res) => {
    try {
        const { token } = req.body;

        console.log("TOKEN:", token);

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();

        console.log("PAYLOAD:", payload);

        const { email, given_name, family_name, picture, sub } = payload;

        let user = await User.findOne({ email });

        if (!user) {
            // ✅ CREATE NEW USER
            user = await User.create({
                email,
                firstName: given_name,
                lastName: family_name || "",
                googleId: sub,
                profilePic: picture,
                role: "patient"
            });
        } else {
            // ✅ UPDATE EXISTING USER (THIS WAS NOT WORKING BEFORE)
            user.googleId = sub;
            user.profilePic = picture;

            if (!user.firstName) {
                user.firstName = given_name;
                user.lastName = family_name || "";
            }

            await user.save();
        }

        // CREATE JWT
        const appToken = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET || 'secret_key',
            { expiresIn: "1d" }
        );

        //  ROLE ALSO (frontend needs it)
        res.json({
            token: appToken,
            role: user.role,
            user
        });

    } catch (error) {
        console.error("GOOGLE ERROR:", error);
        res.status(400).json({ message: "Google login failed" });
    }
});

export default router;