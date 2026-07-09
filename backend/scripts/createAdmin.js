import "dotenv/config";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const email = "anuragkumar@gmail.com";

        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            console.log("Admin already exists");
            process.exit(0);
        }

        const admin = new Admin({
            firstName: "Anurag",
            lastName: "Kumar",
            email,
            password: "Anurag@1234",
        });

        await admin.save();

        console.log("Admin created successfully");
    } catch (error) {
        console.error("Error creating admin:", error.message);
    } finally {
        await mongoose.connection.close();
    }
};

createAdmin();