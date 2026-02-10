import Event from '../models/Event.js';
import Department from '../models/Department.js';

// @desc    Get all events
// @route   GET /api/events
// @access  Public
export const getAllEvents = async (req, res, next) => {
  try {
    const {
      category,
      department,
      upcoming,
      featured,
      search,
      page = 1,
      limit = 10,
    } = req.query;

    // Build query
    const query = { isPublished: true };

    if (category) {
      query.category = category;
    }

    if (department) {
      query.department = department;
    }

    if (featured !== undefined) {
      query.isFeatured = featured === 'true';
    }

    if (upcoming === 'true') {
      query.startDate = { $gte: new Date() };
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { venue: { $regex: search, $options: 'i' } },
      ];
    }

    // Pagination
    const skip = (page - 1) * limit;

    const events = await Event.find(query)
      .populate('department', 'name code')
      .limit(parseInt(limit))
      .skip(skip)
      .sort({ startDate: -1 });

    const total = await Event.countDocuments(query);

    res.status(200).json({
      success: true,
      count: events.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      data: events,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single event by ID
// @route   GET /api/events/:id
// @access  Public
export const getEventById = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id).populate(
      'department',
      'name code description'
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create event
// @route   POST /api/events
// @access  Private/Admin
export const createEvent = async (req, res, next) => {
  try {
    const {
      title,
      description,
      venue,
      startDate,
      endDate,
      time,
      category,
      organizer,
      department,
      image,
      registrationRequired,
      registrationLink,
      contactPerson,
      isPublished,
      isFeatured,
    } = req.body;

    // Validate dates
    if (new Date(startDate) > new Date(endDate)) {
      return res.status(400).json({
        success: false,
        message: 'End date must be after start date',
      });
    }

    // Check if department exists (if provided)
    if (department) {
      const departmentExists = await Department.findById(department);
      if (!departmentExists) {
        return res.status(404).json({
          success: false,
          message: 'Department not found',
        });
      }
    }

    const event = await Event.create({
      title,
      description,
      venue,
      startDate,
      endDate,
      time,
      category,
      organizer,
      department,
      image,
      registrationRequired,
      registrationLink,
      contactPerson,
      isPublished,
      isFeatured,
    });

    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update event
// @route   PUT /api/events/:id
// @access  Private/Admin
export const updateEvent = async (req, res, next) => {
  try {
    let event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }

    // Validate dates if being updated
    if (req.body.startDate || req.body.endDate) {
      const startDate = req.body.startDate
        ? new Date(req.body.startDate)
        : event.startDate;
      const endDate = req.body.endDate
        ? new Date(req.body.endDate)
        : event.endDate;

      if (startDate > endDate) {
        return res.status(400).json({
          success: false,
          message: 'End date must be after start date',
        });
      }
    }

    // Check if department exists (if being updated)
    if (req.body.department) {
      const departmentExists = await Department.findById(req.body.department);
      if (!departmentExists) {
        return res.status(404).json({
          success: false,
          message: 'Department not found',
        });
      }
    }

    event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate('department', 'name code');

    res.status(200).json({
      success: true,
      message: 'Event updated successfully',
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete event
// @route   DELETE /api/events/:id
// @access  Private/Admin
export const deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }

    await event.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Event deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get upcoming events
// @route   GET /api/events/upcoming/all
// @access  Public
export const getUpcomingEvents = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 5;

    const events = await Event.find({
      startDate: { $gte: new Date() },
      isPublished: true,
    })
      .populate('department', 'name code')
      .sort({ startDate: 1 })
      .limit(limit);

    res.status(200).json({
      success: true,
      count: events.length,
      data: events,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured events
// @route   GET /api/events/featured/all
// @access  Public
export const getFeaturedEvents = async (req, res, next) => {
  try {
    const events = await Event.find({
      isFeatured: true,
      isPublished: true,
    })
      .populate('department', 'name code')
      .sort({ startDate: -1 })
      .limit(6);

    res.status(200).json({
      success: true,
      count: events.length,
      data: events,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get past events
// @route   GET /api/events/past/all
// @access  Public
export const getPastEvents = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const events = await Event.find({
      endDate: { $lt: new Date() },
      isPublished: true,
    })
      .populate('department', 'name code')
      .sort({ endDate: -1 })
      .limit(limit)
      .skip(skip);

    const total = await Event.countDocuments({
      endDate: { $lt: new Date() },
      isPublished: true,
    });

    res.status(200).json({
      success: true,
      count: events.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: events,
    });
  } catch (error) {
    next(error);
  }
};
