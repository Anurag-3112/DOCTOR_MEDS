import express from 'express';
import jwt from 'jsonwebtoken';
import Appointment from '../models/Appointment.js';
import User from '../models/User.js';

const router = express.Router();

// 🔐 Auth middleware
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// ✅ GET PROFILE (fix 404)
router.get('/profile', auth, async (req, res) => {
  try {
    const patient = await User.findById(req.user.userId).select('-password');
    res.json(patient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ BOOK APPOINTMENT (fix 500)
router.post('/book-appointment', auth, async (req, res) => {
  try {
    console.log("🔥 HIT BOOK API");

    const { doctorId, date, time, reason } = req.body;

    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    const appointment = new Appointment({
      patientId: req.user.userId, // 🔥 FIX
      doctorId,
      date: new Date(date),
      time,
      reason
    });

    await appointment.save();

    res.status(201).json({ message: "Appointment booked successfully" });

  } catch (error) {
    console.error("❌ ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;