# Amal Jyothi College of Engineering - Official Website

A modern, responsive website built with the MERN stack for Amal Jyothi College of Engineering.

## 🚀 Tech Stack

### Frontend
- **React.js** - UI Library
- **Tailwind CSS** - Styling
- **ShadCN UI / Radix UI** - Component Library
- **Framer Motion** - Animations
- **React Icons / Lucide Icons** - Icons
- **Axios** - HTTP Client
- **React Router** - Routing

### Backend
- **Node.js** - Runtime
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password Hashing

## 📁 Project Structure

```
ajce-website/
├── client/                 # Frontend React Application
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── layouts/       # Layout components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   ├── assets/        # Images, fonts, etc.
│   │   ├── services/      # API service layer
│   │   ├── App.js         # Main App component
│   │   └── main.js        # Entry point
│   └── package.json
│
├── server/                # Backend Node.js Application
│   ├── controllers/       # Route controllers
│   ├── routes/           # API routes
│   ├── models/           # MongoDB models
│   ├── middlewares/      # Custom middlewares
│   ├── config/           # Configuration files
│   ├── server.js         # Entry point
│   └── package.json
│
└── README.md
```

## 🏗️ Team Task Assignment

### Developer 1 – Frontend UI
- [ ] Home page
- [ ] Navbar & Footer
- [ ] Responsive layout
- [ ] Framer Motion animations

### Developer 2 – Academic Pages
- [ ] Departments listing
- [ ] Courses pages
- [ ] Faculty pages
- [ ] API integration

### Developer 3 – Backend
- [ ] Auth system (JWT)
- [ ] Database models
- [ ] REST APIs
- [ ] Middleware setup

### Developer 4 – Admin Dashboard
- [ ] Admin UI
- [ ] CRUD forms
- [ ] Role-based access
- [ ] Content management

### Developer 5 – QA & Optimization
- [ ] Performance testing
- [ ] Accessibility (WCAG)
- [ ] SEO optimization
- [ ] Cross-device testing

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (Local or Atlas)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AkashSuresh2675/Amal-Jyothi-clg-site.git
cd Amal-Jyothi-clg-site
```

2. **Install Backend Dependencies**
```bash
cd server
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../client
npm install
```

4. **Environment Variables**

Create `.env` file in `server/` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ajce-website
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

Create `.env` file in `client/` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

5. **Run Development Servers**

Backend:
```bash
cd server
npm run dev
```

Frontend (in new terminal):
```bash
cd client
npm run dev
```

## 🌐 Website Sections

### Public Pages
1. **Home** - Hero, About preview, Highlights, News
2. **About Us** - Vision, Mission, History, Management
3. **Academics** - Departments, Courses, Faculty
4. **Admissions** - Programs, Eligibility, Application
5. **Campus Life** - Clubs, Events, Gallery
6. **Research & Innovation** - Projects, Publications
7. **Placements** - Statistics, Recruiters
8. **Contact Us** - Location, Form, Info

### Admin Dashboard
- Secure login (JWT authentication)
- News & Announcements management
- Events management
- Departments management
- Faculty management
- Gallery management
- Role-based access control

## 🔄 Git Workflow

### Branch Naming Convention
- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/description` - Documentation
- `refactor/description` - Code refactoring

### Commit Message Format
```
type(scope): subject

body (optional)
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```bash
git commit -m "feat(home): add hero section with animations"
```

### Pull Request Process
1. Create feature branch from `main`
2. Make changes and commit
3. Push to GitHub
4. Create Pull Request
5. Request code review
6. Merge after approval

## 📦 Build & Deployment

### Production Build

Backend:
```bash
cd server
npm run build
npm start
```

Frontend:
```bash
cd client
npm run build
```

### Deployment Options
- **Frontend**: Vercel, Netlify, AWS S3
- **Backend**: Railway, Render, AWS EC2
- **Database**: MongoDB Atlas

## 🧪 Testing

```bash
# Frontend tests
cd client
npm test

# Backend tests
cd server
npm test
```

## 📱 Responsive Design
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## ♿ Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader support
- WCAG 2.1 AA compliance

## 📄 License
© 2024 Amal Jyothi College of Engineering. All rights reserved.

## 👥 Contributors
- Developer 1 - Frontend UI
- Developer 2 - Academic Pages
- Developer 3 - Backend
- Developer 4 - Admin Dashboard
- Developer 5 - QA & Optimization

## 🤝 Contributing
Please read the contribution guidelines before submitting PRs.

## 📞 Support
For issues or questions, contact: webmaster@ajce.in
