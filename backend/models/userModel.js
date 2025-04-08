// models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: ['student', 'recruiter', 'admin'],
      default: 'student',
    },
    phone: {
      type: String,
      trim: true,
    },
    profilePic: {
      type: String, // Cloudinary or static URL
      default: '',
    },

    // 🎓 Student-specific
    branch: {
      type: String,
    },
    college: {
      type: String,
    },
    graduationYear: {
      type: Number,
    },
    skills: [
      {
        type: String,
      },
    ],
    resumeUrl: {
      type: String,
    },

    // 🧑‍💼 Recruiter-specific
    company: {
      type: String,
    },
    designation: {
      type: String,
    },

    // ⚙️ Common features
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    socialLinks: {
      github: String,
      linkedin: String,
      portfolio: String,
    },
    savedJobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
