import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Department from '../models/Department.js';
import Faculty from '../models/Faculty.js';
import News from '../models/News.js';
import Event from '../models/Event.js';
import connectDB from '../config/database.js';

// Load env vars
dotenv.config();

// Sample data
const users = [
  {
    name: 'Admin User',
    email: 'admin@ajce.in',
    password: 'admin123',
    role: 'admin',
    isActive: true,
  },
  {
    name: 'Editor User',
    email: 'editor@ajce.in',
    password: 'editor123',
    role: 'editor',
    isActive: true,
  },
];

const departments = [
  {
    name: 'Computer Science and Engineering',
    code: 'CSE',
    description:
      'The Department of Computer Science and Engineering offers undergraduate and postgraduate programs with focus on cutting-edge technologies.',
    hod: 'Dr. John Smith',
    established: new Date('2005-06-15'),
    vision:
      'To be a center of excellence in computer science education and research.',
    mission:
      'To provide quality education and foster innovation in computer science.',
    facilities: [
      'Advanced Computing Lab',
      'AI/ML Lab',
      'Software Development Center',
    ],
    achievements: [
      'Ranked among top engineering colleges',
      'High placement record',
    ],
    isActive: true,
  },
  {
    name: 'Electronics and Communication Engineering',
    code: 'ECE',
    description:
      'The ECE department focuses on electronics, communication systems, and VLSI design.',
    hod: 'Dr. Sarah Johnson',
    established: new Date('2006-07-20'),
    vision: 'To excel in electronics and communication engineering.',
    mission: 'To train students in modern electronics and communication.',
    facilities: ['VLSI Lab', 'Communication Lab', 'Embedded Systems Lab'],
    achievements: ['Industry collaborations', 'Research publications'],
    isActive: true,
  },
  {
    name: 'Mechanical Engineering',
    code: 'MECH',
    description:
      'The Mechanical Engineering department offers comprehensive education in mechanical systems and manufacturing.',
    hod: 'Dr. Michael Brown',
    established: new Date('2005-06-15'),
    vision: 'To be leaders in mechanical engineering education.',
    mission: 'To provide hands-on training in mechanical engineering.',
    facilities: ['CAD/CAM Lab', 'Manufacturing Lab', 'Thermal Lab'],
    achievements: ['Patent filings', 'Industry projects'],
    isActive: true,
  },
  {
    name: 'Civil Engineering',
    code: 'CE',
    description:
      'The Civil Engineering department focuses on infrastructure development and sustainable construction.',
    hod: 'Dr. Emily Davis',
    established: new Date('2005-06-15'),
    vision: 'To create civil engineers for sustainable development.',
    mission: 'To impart knowledge in civil engineering and construction.',
    facilities: ['Structural Lab', 'Surveying Lab', 'Concrete Testing Lab'],
    achievements: ['Community projects', 'Research papers'],
    isActive: true,
  },
];

// Import data
const importData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Department.deleteMany();
    await Faculty.deleteMany();
    await News.deleteMany();
    await Event.deleteMany();

    console.log('Data destroyed...');

    // Create users
    const createdUsers = await User.create(users);
    console.log('Users created...');

    // Create departments
    const createdDepartments = await Department.create(departments);
    console.log('Departments created...');

    // Create faculty
    const faculty = [
      {
        name: 'Dr. Alice Williams',
        email: 'alice.williams@ajce.in',
        phone: '+91 9876543210',
        department: createdDepartments[0]._id,
        designation: 'Professor',
        qualification: 'Ph.D. in Computer Science',
        specialization: ['Machine Learning', 'Data Science', 'AI'],
        experience: 15,
        bio: 'Dr. Alice Williams is a renowned expert in Machine Learning with 15 years of teaching experience.',
        researchInterests: [
          'Deep Learning',
          'Natural Language Processing',
          'Computer Vision',
        ],
        publications: [
          {
            title: 'Advanced Machine Learning Techniques',
            journal: 'IEEE Transactions',
            year: 2023,
            link: 'https://example.com',
          },
        ],
        socialLinks: {
          linkedin: 'https://linkedin.com/in/alicewilliams',
          googleScholar: 'https://scholar.google.com/alicewilliams',
        },
        isActive: true,
      },
      {
        name: 'Prof. Robert Taylor',
        email: 'robert.taylor@ajce.in',
        phone: '+91 9876543211',
        department: createdDepartments[0]._id,
        designation: 'Associate Professor',
        qualification: 'M.Tech in Computer Science',
        specialization: ['Web Development', 'Database Systems'],
        experience: 10,
        bio: 'Prof. Robert Taylor specializes in web technologies and database management systems.',
        researchInterests: [
          'Cloud Computing',
          'Database Optimization',
          'Full Stack Development',
        ],
        isActive: true,
      },
      {
        name: 'Dr. Maria Garcia',
        email: 'maria.garcia@ajce.in',
        phone: '+91 9876543212',
        department: createdDepartments[1]._id,
        designation: 'Professor',
        qualification: 'Ph.D. in Electronics',
        specialization: ['VLSI Design', 'Embedded Systems'],
        experience: 12,
        bio: 'Dr. Maria Garcia is an expert in VLSI design and embedded systems.',
        researchInterests: ['IoT', 'Chip Design', 'Signal Processing'],
        isActive: true,
      },
    ];

    const createdFaculty = await Faculty.create(faculty);
    console.log('Faculty created...');

    // Create news
    const news = [
      {
        title: 'AJCE Ranked Among Top Engineering Colleges in Kerala',
        content:
          'Amal Jyothi College of Engineering has been ranked among the top engineering colleges in Kerala for the year 2024. This achievement reflects our commitment to academic excellence and holistic student development.',
        excerpt:
          'AJCE secures top position in latest engineering college rankings.',
        category: 'achievement',
        author: createdUsers[0]._id,
        tags: ['ranking', 'achievement', 'news'],
        isPinned: true,
        isPublished: true,
        publishedAt: new Date(),
      },
      {
        title: 'Annual Tech Fest 2024 Dates Announced',
        content:
          'The much-awaited annual technical festival will be held from March 15-17, 2024. The fest will feature technical competitions, workshops, and guest lectures from industry experts.',
        excerpt: 'Tech Fest 2024 scheduled for March 15-17.',
        category: 'event',
        author: createdUsers[1]._id,
        tags: ['techfest', 'event', 'announcement'],
        isPinned: true,
        isPublished: true,
        publishedAt: new Date(),
      },
      {
        title: 'New Research Lab Inaugurated',
        content:
          'A state-of-the-art AI and Machine Learning research lab was inaugurated today by the Chief Guest Dr. Rajesh Kumar, renowned AI researcher from IIT Delhi.',
        excerpt: 'New AI/ML research lab opens at AJCE.',
        category: 'announcement',
        author: createdUsers[0]._id,
        tags: ['research', 'infrastructure', 'AI'],
        isPinned: false,
        isPublished: true,
        publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
    ];

    const createdNews = await News.create(news);
    console.log('News created...');

    // Create events
    const events = [
      {
        title: 'National Level Hackathon 2024',
        description:
          'A 24-hour hackathon where students can showcase their coding and problem-solving skills. Cash prizes worth Rs. 1 lakh to be won!',
        venue: 'CSE Department, AJCE',
        startDate: new Date('2024-03-15'),
        endDate: new Date('2024-03-16'),
        time: '9:00 AM onwards',
        category: 'technical',
        organizer: 'CSE Department',
        department: createdDepartments[0]._id,
        registrationRequired: true,
        registrationLink: 'https://ajce.in/hackathon2024',
        contactPerson: {
          name: 'Dr. Alice Williams',
          email: 'hackathon@ajce.in',
          phone: '+91 9876543210',
        },
        isPublished: true,
        isFeatured: true,
      },
      {
        title: 'Industry Expert Talk on AI',
        description:
          'An enriching session on the future of Artificial Intelligence by industry expert Mr. Amit Sharma, AI Lead at Google India.',
        venue: 'Main Auditorium',
        startDate: new Date('2024-03-20'),
        endDate: new Date('2024-03-20'),
        time: '2:00 PM - 4:00 PM',
        category: 'seminar',
        organizer: 'CSE Department',
        department: createdDepartments[0]._id,
        registrationRequired: false,
        contactPerson: {
          name: 'Prof. Robert Taylor',
          email: 'events@ajce.in',
          phone: '+91 9876543211',
        },
        isPublished: true,
        isFeatured: true,
      },
      {
        title: 'Annual Sports Day',
        description:
          'Annual sports day featuring athletics, team sports, and cultural events. All students are encouraged to participate.',
        venue: 'College Grounds',
        startDate: new Date('2024-04-10'),
        endDate: new Date('2024-04-12'),
        time: '8:00 AM onwards',
        category: 'sports',
        organizer: 'Sports Committee',
        registrationRequired: true,
        registrationLink: 'https://ajce.in/sports2024',
        contactPerson: {
          name: 'Mr. Sports Coordinator',
          email: 'sports@ajce.in',
          phone: '+91 9876543213',
        },
        isPublished: true,
        isFeatured: false,
      },
    ];

    const createdEvents = await Event.create(events);
    console.log('Events created...');

    console.log('\n✅ Data imported successfully!');
    console.log('\n📊 Summary:');
    console.log(`- Users: ${createdUsers.length}`);
    console.log(`- Departments: ${createdDepartments.length}`);
    console.log(`- Faculty: ${createdFaculty.length}`);
    console.log(`- News: ${createdNews.length}`);
    console.log(`- Events: ${createdEvents.length}`);
    console.log('\n🔐 Default Login Credentials:');
    console.log('Admin - Email: admin@ajce.in | Password: admin123');
    console.log('Editor - Email: editor@ajce.in | Password: editor123');

    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Department.deleteMany();
    await Faculty.deleteMany();
    await News.deleteMany();
    await Event.deleteMany();

    console.log('✅ Data destroyed successfully!');
    process.exit();
  } catch (error) {
    console.error('Error destroying data:', error);
    process.exit(1);
  }
};

// Run based on command line argument
if (process.argv[2] === '-i' || process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '-d' || process.argv[2] === '--delete') {
  deleteData();
} else {
  console.log('Please specify an option:');
  console.log('  -i or --import : Import sample data');
  console.log('  -d or --delete : Delete all data');
  process.exit();
}
