# AJCE Website - Backend Server

RESTful API backend for the Amal Jyothi College of Engineering website built with Node.js, Express, and MongoDB.

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Navigate to server directory**
```bash
cd server
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start MongoDB** (if using local)
```bash
mongod
```

5. **Seed database with sample data**
```bash
npm run seed:import
```

6. **Start development server**
```bash
npm run dev
```

Server will run on `http://localhost:5000`

---

## 📁 Project Structure

```
server/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/             # Request handlers
│   ├── authController.js
│   ├── departmentController.js
│   ├── facultyController.js
│   ├── newsController.js
│   └── eventController.js
├── middlewares/             # Custom middleware
│   ├── auth.js             # JWT authentication
│   ├── error.js            # Error handling
│   ├── upload.js           # File upload (Multer)
│   └── validation.js       # Request validation
├── models/                  # Mongoose schemas
│   ├── User.js
│   ├── Department.js
│   ├── Faculty.js
│   ├── News.js
│   └── Event.js
├── routes/                  # API routes
│   ├── authRoutes.js
│   ├── departmentRoutes.js
│   ├── facultyRoutes.js
│   ├── newsRoutes.js
│   └── eventRoutes.js
├── utils/                   # Utility functions
│   ├── generateToken.js    # JWT token generation
│   ├── emailService.js     # Email functionality
│   └── seeder.js           # Database seeding
├── uploads/                 # Uploaded files
├── server.js               # Main server file
├── package.json
└── .env.example
```

---

## 🔑 Default Credentials

After seeding the database:

- **Admin**
  - Email: `admin@ajce.in`
  - Password: `admin123`

- **Editor**
  - Email: `editor@ajce.in`
  - Password: `editor123`

⚠️ **Change these passwords immediately in production!**

---

## 📚 API Documentation

Comprehensive API documentation is available in [`API_DOCUMENTATION.md`](./API_DOCUMENTATION.md)

### Base URL
```
http://localhost:5000/api
```

### Main Endpoints

| Resource | Endpoint | Description |
|----------|----------|-------------|
| Auth | `/api/auth` | Authentication & user management |
| Departments | `/api/departments` | Department CRUD operations |
| Faculty | `/api/faculty` | Faculty management |
| News | `/api/news` | News articles |
| Events | `/api/events` | Event management |

### Quick Example

```javascript
// Login
const response = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'admin@ajce.in',
    password: 'admin123'
  })
});

const { data } = await response.json();
const token = data.token;

// Get departments
const departments = await fetch('http://localhost:5000/api/departments');
const deptData = await departments.json();
```

---

## 🛠️ NPM Scripts

```bash
# Development
npm run dev          # Start with nodemon (auto-restart)
npm start           # Start production server

# Database
npm run seed:import # Import sample data
npm run seed:delete # Delete all data

# Testing (to be implemented)
npm test            # Run tests
```

---

## 🔐 Environment Variables

Create a `.env` file with the following:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/ajce-website

# JWT
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRE=7d

# Frontend
CLIENT_URL=http://localhost:5173

# Email (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@ajce.in
EMAIL_FROM_NAME=AJCE Website
CONTACT_EMAIL=info@ajce.in

# Cloudinary (Optional)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

---

## 🗃️ Database Models

### User
- Admin and editor roles
- Password hashing with bcrypt
- JWT token authentication

### Department
- Department information
- HOD, facilities, achievements
- Vision and mission

### Faculty
- Faculty member details
- Department association
- Research interests, publications
- Social links

### News
- News articles and announcements
- Categories, tags
- Pinned and published status
- View counter

### Event
- Event management
- Dates, venue, registration
- Categories, featured status
- Contact person details

---

## 🔒 Security Features

- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ Rate limiting
- ✅ CORS protection
- ✅ Helmet.js security headers
- ✅ Input validation
- ✅ XSS protection
- ✅ MongoDB injection prevention

---

## 📋 Testing

See [`TESTING.md`](./TESTING.md) for comprehensive testing guide.

### Quick Test
```bash
# Health check
curl http://localhost:5000/api/health

# Login test
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@ajce.in","password":"admin123"}'
```

---

## 🚀 Deployment

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for deployment instructions.

### Quick Deploy Options
- [Render](https://render.com) (Recommended for beginners)
- [Railway](https://railway.app)
- [Heroku](https://heroku.com)
- DigitalOcean VPS

---

## 📦 Dependencies

### Core
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `dotenv` - Environment variables
- `cors` - Cross-origin resource sharing
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication

### Security
- `helmet` - Security headers
- `express-rate-limit` - Rate limiting
- `express-validator` - Input validation

### Utilities
- `multer` - File uploads
- `nodemailer` - Email sending
- `morgan` - HTTP logging
- `compression` - Response compression

### Development
- `nodemon` - Auto-restart server

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Ensure MongoDB is running
mongod

# Check connection string in .env
MONGODB_URI=mongodb://localhost:27017/ajce-website
```

### Port Already in Use
```bash
# Change PORT in .env
PORT=5001
```

### JWT Token Errors
```bash
# Ensure JWT_SECRET is set in .env
JWT_SECRET=your_very_long_secret_key_here
```

---

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make changes and test thoroughly
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Create Pull Request

---

## 📝 License

This project is part of the AJCE Website Development project.

---

## 👥 Team

**Backend Developer: @AbinVarghexe**

### Task Completion ✅

- ✅ facultyController.js - Faculty CRUD operations
- ✅ newsController.js - News CRUD operations
- ✅ eventController.js - Event CRUD operations
- ✅ authRoutes.js - Authentication routes
- ✅ departmentRoutes.js - Department routes
- ✅ facultyRoutes.js - Faculty routes
- ✅ newsRoutes.js - News routes
- ✅ eventRoutes.js - Event routes
- ✅ upload.js - File upload middleware (Multer)
- ✅ validation.js - Validation middleware
- ✅ emailService.js - Email sending utility
- ✅ seeder.js - Database seeding script
- ✅ server.js - Main server entry point
- ✅ CORS setup
- ✅ Express middleware
- ✅ All routes connected
- ✅ Error handling
- ✅ MongoDB connection
- ✅ Database seeding
- ✅ API documentation

---

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Contact: @AbinVarghexe

---

## 🎯 Next Steps

1. Run `npm run seed:import` to populate database
2. Test all API endpoints
3. Integrate with frontend
4. Deploy to production
5. Monitor and optimize

---

**Happy Coding! 🚀**
