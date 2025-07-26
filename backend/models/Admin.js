import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const adminSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  role:      { type: String, default: 'admin' },
});

// Hash password before saving
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;


const createAdmin = async () => {
  try {
    const newAdmin = new Admin({
      firstName: 'Anurag',
      lastName: 'Kumar',
      email: 'anuragkumar@gmail.com',
      password: 'Anurag1234`'
    });

    await newAdmin.save();
    console.log('Admin created successfully!');
  } catch (error) {
    console.error('Error creating admin:', error.message);
  }
};

createAdmin();
