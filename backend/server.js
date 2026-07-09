import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';
import adminRouter from './routes/admin.js';
import doctorRouter from './routes/doctor.js';
import patientRouter from './routes/patient.js';      // has ALL patient routes
import googleAuthRouter from './routes/googleAuth.js';

// ❌ REMOVED patientRoutes.js — it was a duplicate of patient.js

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes — registered BEFORE app.listen()
app.use('/api/auth', googleAuthRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/patient', patientRouter); // ✅ single source of truth

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Hospital Management System API');
});

// MongoDB connection + server start
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));