import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Event title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Event description is required'],
    },
    venue: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
      required: [true, 'End date is required'],
    },
    time: {
      type: String,
    },
    category: {
      type: String,
      enum: ['technical', 'cultural', 'sports', 'seminar', 'workshop', 'fest', 'other'],
      default: 'other',
    },
    organizer: {
      type: String,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
    },
    image: {
      type: String,
    },
    registrationRequired: {
      type: Boolean,
      default: false,
    },
    registrationLink: {
      type: String,
    },
    contactPerson: {
      name: String,
      email: String,
      phone: String,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model('Event', eventSchema);

export default Event;
