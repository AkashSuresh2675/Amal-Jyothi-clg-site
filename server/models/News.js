import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'News title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'News content is required'],
    },
    excerpt: {
      type: String,
    },
    category: {
      type: String,
      enum: ['announcement', 'event', 'achievement', 'notice', 'general'],
      default: 'general',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    image: {
      type: String,
    },
    tags: {
      type: [String],
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better search performance
newsSchema.index({ title: 'text', content: 'text' });

const News = mongoose.model('News', newsSchema);

export default News;
