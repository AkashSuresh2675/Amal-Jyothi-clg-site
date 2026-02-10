import Faculty from '../models/Faculty.js';
import Department from '../models/Department.js';

// @desc    Get all faculty
// @route   GET /api/faculty
// @access  Public
export const getAllFaculty = async (req, res, next) => {
  try {
    const { department, designation, search, page = 1, limit = 10 } = req.query;

    // Build query
    const query = { isActive: true };

    if (department) {
      query.department = department;
    }

    if (designation) {
      query.designation = designation;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { specialization: { $regex: search, $options: 'i' } },
        { qualification: { $regex: search, $options: 'i' } },
      ];
    }

    // Pagination
    const skip = (page - 1) * limit;

    const faculty = await Faculty.find(query)
      .populate('department', 'name code')
      .limit(parseInt(limit))
      .skip(skip)
      .sort({ name: 1 });

    const total = await Faculty.countDocuments(query);

    res.status(200).json({
      success: true,
      count: faculty.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single faculty by ID
// @route   GET /api/faculty/:id
// @access  Public
export const getFacultyById = async (req, res, next) => {
  try {
    const faculty = await Faculty.findById(req.params.id).populate(
      'department',
      'name code description'
    );

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: 'Faculty not found',
      });
    }

    res.status(200).json({
      success: true,
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new faculty
// @route   POST /api/faculty
// @access  Private/Admin
export const createFaculty = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      department,
      designation,
      qualification,
      specialization,
      experience,
      image,
      bio,
      researchInterests,
      publications,
      socialLinks,
    } = req.body;

    // Check if department exists
    const departmentExists = await Department.findById(department);
    if (!departmentExists) {
      return res.status(404).json({
        success: false,
        message: 'Department not found',
      });
    }

    // Check if faculty with same email already exists
    const facultyExists = await Faculty.findOne({ email });
    if (facultyExists) {
      return res.status(400).json({
        success: false,
        message: 'Faculty with this email already exists',
      });
    }

    const faculty = await Faculty.create({
      name,
      email,
      phone,
      department,
      designation,
      qualification,
      specialization,
      experience,
      image,
      bio,
      researchInterests,
      publications,
      socialLinks,
    });

    res.status(201).json({
      success: true,
      message: 'Faculty created successfully',
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update faculty
// @route   PUT /api/faculty/:id
// @access  Private/Admin
export const updateFaculty = async (req, res, next) => {
  try {
    const faculty = await Faculty.findById(req.params.id);

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: 'Faculty not found',
      });
    }

    // If department is being updated, verify it exists
    if (req.body.department) {
      const departmentExists = await Department.findById(req.body.department);
      if (!departmentExists) {
        return res.status(404).json({
          success: false,
          message: 'Department not found',
        });
      }
    }

    const updatedFaculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate('department', 'name code');

    res.status(200).json({
      success: true,
      message: 'Faculty updated successfully',
      data: updatedFaculty,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete faculty (soft delete)
// @route   DELETE /api/faculty/:id
// @access  Private/Admin
export const deleteFaculty = async (req, res, next) => {
  try {
    const faculty = await Faculty.findById(req.params.id);

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: 'Faculty not found',
      });
    }

    // Soft delete
    faculty.isActive = false;
    await faculty.save();

    res.status(200).json({
      success: true,
      message: 'Faculty deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get faculty by department
// @route   GET /api/faculty/department/:departmentId
// @access  Public
export const getFacultyByDepartment = async (req, res, next) => {
  try {
    const faculty = await Faculty.find({
      department: req.params.departmentId,
      isActive: true,
    })
      .populate('department', 'name code')
      .sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: faculty.length,
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};
