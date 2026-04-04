import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Admin from './models/Admin.js';

const MONGO_URI = 'mongodb://localhost:27017/User';

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB', err);
    process.exit(1);
  }
}

async function createAdmin() {
  try {
    await connectDB();

    const email = "abc@gmail.com".trim().toLowerCase();

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log('Admin already exists');
      return;
    }

    const hashedPassword = await bcrypt.hash("pqr123", 10);

    const admin = new Admin({
      firstName: "abc",
      lastName: "pqr",
      email: email,
      password: hashedPassword,
      role: "admin"
    });

    await admin.save();
    console.log('✅ Admin created successfully');

  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

createAdmin();