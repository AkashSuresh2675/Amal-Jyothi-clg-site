import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Department name is required'],
      trim: true,
    },
    code: {
      type: String,
      required: [true, 'Department code is required'],
      unique: true,
      uppercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Department description is required'],
    },
    vision: {
      type: String,
    },
    mission: {
      type: String,
    },
    head: {
      type: String,
      trim: true,
    },
    established: {
      type: Number,
    },
    programs: [
      {
        name: String,
        duration: String,
        intake: Number,
      },
    ],
    image: {
      type: String,
    },
    achievements: [
      {
        title: String,
        description: String,
        year: Number,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model('Department', departmentSchema);

export default Department;
