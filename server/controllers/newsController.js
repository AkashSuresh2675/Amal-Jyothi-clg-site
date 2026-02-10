import News from '../models/News.js';

// @desc    Get all news
// @route   GET /api/news
// @access  Public
export const getAllNews = async (req, res, next) => {
  try {
    const {
      category,
      tags,
      search,
      isPinned,
      page = 1,
      limit = 10,
    } = req.query;

    // Build query
    const query = { isPublished: true };

    if (category) {
      query.category = category;
    }

    if (tags) {
      query.tags = { $in: tags.split(',') };
    }

    if (isPinned !== undefined) {
      query.isPinned = isPinned === 'true';
    }

    if (search) {
      query.$text = { $search: search };
    }

    // Pagination
    const skip = (page - 1) * limit;

    const news = await News.find(query)
      .populate('author', 'name email')
      .limit(parseInt(limit))
      .skip(skip)
      .sort({ isPinned: -1, publishedAt: -1 });

    const total = await News.countDocuments(query);

    res.status(200).json({
      success: true,
      count: news.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      data: news,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single news by ID
// @route   GET /api/news/:id
// @access  Public
export const getNewsById = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id).populate(
      'author',
      'name email'
    );

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News not found',
      });
    }

    // Increment views
    news.views += 1;
    await news.save();

    res.status(200).json({
      success: true,
      data: news,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create news
// @route   POST /api/news
// @access  Private/Admin
export const createNews = async (req, res, next) => {
  try {
    const {
      title,
      content,
      excerpt,
      category,
      image,
      tags,
      isPinned,
      isPublished,
    } = req.body;

    const news = await News.create({
      title,
      content,
      excerpt,
      category,
      author: req.user.id,
      image,
      tags,
      isPinned,
      isPublished,
      publishedAt: isPublished ? Date.now() : null,
    });

    res.status(201).json({
      success: true,
      message: 'News created successfully',
      data: news,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update news
// @route   PUT /api/news/:id
// @access  Private/Admin
export const updateNews = async (req, res, next) => {
  try {
    let news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News not found',
      });
    }

    // If publishing for the first time, set publishedAt
    if (!news.isPublished && req.body.isPublished) {
      req.body.publishedAt = Date.now();
    }

    news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate('author', 'name email');

    res.status(200).json({
      success: true,
      message: 'News updated successfully',
      data: news,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete news
// @route   DELETE /api/news/:id
// @access  Private/Admin
export const deleteNews = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News not found',
      });
    }

    await news.deleteOne();

    res.status(200).json({
      success: true,
      message: 'News deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get pinned news
// @route   GET /api/news/pinned/all
// @access  Public
export const getPinnedNews = async (req, res, next) => {
  try {
    const news = await News.find({ isPinned: true, isPublished: true })
      .populate('author', 'name email')
      .sort({ publishedAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      count: news.length,
      data: news,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get latest news
// @route   GET /api/news/latest/all
// @access  Public
export const getLatestNews = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 5;

    const news = await News.find({ isPublished: true })
      .populate('author', 'name email')
      .sort({ publishedAt: -1 })
      .limit(limit);

    res.status(200).json({
      success: true,
      count: news.length,
      data: news,
    });
  } catch (error) {
    next(error);
  }
};
