import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    firstName: { 
      type: String, 
      required: function () {
        return !this.googleId; 
      }
    },

    lastName: { 
      type: String, 
      required: function () {
        return !this.googleId;
      }
    },

    email: { 
      type: String, 
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true
    },

    password: { 
      type: String,
      required: function () {
        return !this.googleId;
      },
      minlength: [6, 'Password must be at least 6 characters']
    },

    googleId: {
      type: String,
      default: null
    },

    profilePic: {
      type: String,
      default: null
    },

    role: { 
      type: String, 
      required: true, 
      default: 'patient',
      enum: ['patient', 'doctor', 'admin']
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', async function(next) {
  try {
    if (!this.password) return next();
    if (!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  if (!this.password) return false;
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;