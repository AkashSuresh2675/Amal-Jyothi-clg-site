import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Faculty name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
    },
    phone: {
      type: String,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    designation: {
      type: String,
      required: [true, 'Designation is required'],
    },
    qualification: {
      type: String,
      required: true,
    },
    specialization: {
      type: [String],
    },
    experience: {
      type: Number,
    },
    image: {
      type: String,
    },
    bio: {
      type: String,
    },
    researchInterests: {
      type: [String],
    },
    publications: [
      {
        title: String,
        journal: String,
        year: Number,
        link: String,
      },
    ],
    socialLinks: {
      linkedin: String,
      googleScholar: String,
      researchGate: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Faculty = mongoose.model('Faculty', facultySchema);

export default Faculty;
