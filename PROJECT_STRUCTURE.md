# 🏗️ AJCE Website - Project Structure & Task Assignment

## 📁 Complete Folder Structure

```
ajce-website/
├── client/                          # Frontend React App
│   ├── public/
│   │   └── assets/
│   │       ├── images/
│   │       └── icons/
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   │   ├── common/             # Common UI components
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── Loader.jsx
│   │   │   ├── home/               # Home page specific
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── AboutPreview.jsx
│   │   │   │   ├── DepartmentsPreview.jsx
│   │   │   │   ├── Highlights.jsx
│   │   │   │   ├── NewsSection.jsx
│   │   │   │   └── Testimonials.jsx
│   │   │   ├── admin/              # Admin dashboard components
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── DashboardCard.jsx
│   │   │   │   ├── DataTable.jsx
│   │   │   │   └── forms/
│   │   │   │       ├── NewsForm.jsx
│   │   │   │       ├── EventForm.jsx
│   │   │   │       ├── DepartmentForm.jsx
│   │   │   │       └── FacultyForm.jsx
│   │   │   └── ui/                 # ShadCN UI components
│   │   │       ├── button.jsx
│   │   │       ├── card.jsx
│   │   │       ├── input.jsx
│   │   │       └── select.jsx
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Academics.jsx
│   │   │   ├── Departments.jsx
│   │   │   ├── DepartmentDetail.jsx
│   │   │   ├── Faculty.jsx
│   │   │   ├── Admissions.jsx
│   │   │   ├── CampusLife.jsx
│   │   │   ├── Research.jsx
│   │   │   ├── Placements.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── NewsDetail.jsx
│   │   │   └── admin/
│   │   │       ├── Login.jsx
│   │   │       ├── Dashboard.jsx
│   │   │       ├── ManageNews.jsx
│   │   │       ├── ManageEvents.jsx
│   │   │       ├── ManageDepartments.jsx
│   │   │       └── ManageFaculty.jsx
│   │   ├── layouts/                # Layout wrappers
│   │   │   ├── MainLayout.jsx
│   │   │   └── AdminLayout.jsx
│   │   ├── hooks/                  # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useFetch.js
│   │   │   └── useDebounce.js
│   │   ├── utils/                  # Utility functions
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   └── validators.js
│   │   ├── services/               # API services
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── newsService.js
│   │   │   ├── departmentService.js
│   │   │   ├── facultyService.js
│   │   │   └── eventService.js
│   │   ├── assets/                 # Static assets
│   │   │   ├── images/
│   │   │   └── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                          # Backend Node.js App
│   ├── config/
│   │   └── database.js             ✅ CREATED
│   ├── controllers/
│   │   ├── authController.js       ✅ CREATED
│   │   ├── departmentController.js ✅ CREATED
│   │   ├── facultyController.js    ⏳ TO CREATE
│   │   ├── newsController.js       ⏳ TO CREATE
│   │   └── eventController.js      ⏳ TO CREATE
│   ├── routes/
│   │   ├── authRoutes.js           ⏳ TO CREATE
│   │   ├── departmentRoutes.js     ⏳ TO CREATE
│   │   ├── facultyRoutes.js        ⏳ TO CREATE
│   │   ├── newsRoutes.js           ⏳ TO CREATE
│   │   └── eventRoutes.js          ⏳ TO CREATE
│   ├── models/
│   │   ├── User.js                 ✅ CREATED
│   │   ├── Department.js           ✅ CREATED
│   │   ├── Faculty.js              ✅ CREATED
│   │   ├── News.js                 ✅ CREATED
│   │   └── Event.js                ✅ CREATED
│   ├── middlewares/
│   │   ├── auth.js                 ✅ CREATED
│   │   ├── error.js                ✅ CREATED
│   │   └── upload.js               ⏳ TO CREATE
│   ├── utils/
│   │   ├── generateToken.js        ✅ CREATED
│   │   └── emailService.js         ⏳ TO CREATE
│   ├── .env.example                ✅ CREATED
│   ├── package.json                ✅ CREATED
│   └── server.js                   ⏳ TO CREATE
│
├── .gitignore                       ✅ CREATED
└── README.md                        ✅ CREATED
```

---

## 👥 TASK ASSIGNMENT

### 🎨 **Developer 1 - Frontend UI Lead**
**Branch:** `feature/frontend-ui`

**Responsibilities:**
1. ✅ Setup client folder structure
2. ⏳ Initialize Vite + React project
3. ⏳ Configure Tailwind CSS
4. ⏳ Setup ShadCN UI components
5. ⏳ Create common components:
   - Navbar (responsive, sticky)
   - Footer (4-column layout)
   - Button (variants)
   - Card component
   - Modal/Dialog
   - Loader/Spinner
6. ⏳ Build Home page:
   - Hero section (full-screen, gradient background)
   - About preview section
   - Highlights cards
   - Call-to-action sections
7. ⏳ Implement Framer Motion animations:
   - Fade-in on scroll
   - Smooth page transitions
   - Hover effects
8. ⏳ Ensure responsive design (mobile-first)
9. ⏳ Create MainLayout wrapper

**Files to Create:**
- `client/package.json`
- `client/vite.config.js`
- `client/tailwind.config.js`
- `client/src/components/common/*`
- `client/src/components/home/*`
- `client/src/pages/Home.jsx`
- `client/src/layouts/MainLayout.jsx`
- `client/src/App.jsx`
- `client/src/main.jsx`
- `client/src/index.css`

**Estimated Time:** 3-4 days

---

### 📚 **Developer 2 - Academic Pages**
**Branch:** `feature/academic-pages`

**Responsibilities:**
1. ⏳ Create Academics page structure
2. ⏳ Build Departments listing page
   - Grid layout with cards
   - Search/Filter functionality
3. ⏳ Build Department detail page
   - Department info
   - Programs offered
   - Faculty listing
   - Achievements
4. ⏳ Create Faculty page
   - Faculty directory
   - Filter by department
   - Faculty profile cards
5. ⏳ Build About Us page
   - Vision & Mission
   - History timeline
   - Management/Leadership
6. ⏳ Integrate with backend APIs
7. ⏳ Create API service functions
8. ⏳ Implement loading states & error handling

**Files to Create:**
- `client/src/pages/About.jsx`
- `client/src/pages/Academics.jsx`
- `client/src/pages/Departments.jsx`
- `client/src/pages/DepartmentDetail.jsx`
- `client/src/pages/Faculty.jsx`
- `client/src/services/departmentService.js`
- `client/src/services/facultyService.js`
- `client/src/hooks/useFetch.js`

**Estimated Time:** 3-4 days

**Dependencies:** Needs Developer 1's common components

---

### ⚙️ **Developer 3 - Backend Engineer**
**Branch:** `feature/backend-api`

**Responsibilities:**
1. ⏳ Complete server setup
2. ⏳ Create remaining controllers:
   - `facultyController.js`
   - `newsController.js`
   - `eventController.js`
3. ⏳ Create all route files:
   - Auth routes
   - Department routes
   - Faculty routes
   - News routes
   - Event routes
4. ⏳ Build main `server.js` entry point
5. ⏳ Implement file upload middleware (Multer)
6. ⏳ Setup Cloudinary integration (optional)
7. ⏳ Create email service (Nodemailer)
8. ⏳ Add input validation
9. ⏳ Write API documentation
10. ⏳ Test all endpoints with Postman/Thunder Client
11. ⏳ Create database seeder script

**Files to Create:**
- `server/server.js`
- `server/controllers/facultyController.js`
- `server/controllers/newsController.js`
- `server/controllers/eventController.js`
- `server/routes/authRoutes.js`
- `server/routes/departmentRoutes.js`
- `server/routes/facultyRoutes.js`
- `server/routes/newsRoutes.js`
- `server/routes/eventRoutes.js`
- `server/middlewares/upload.js`
- `server/utils/emailService.js`
- `server/utils/seeder.js`

**Estimated Time:** 4-5 days

**Dependencies:** Models already created ✅

---

### 🔐 **Developer 4 - Admin Dashboard**
**Branch:** `feature/admin-dashboard`

**Responsibilities:**
1. ⏳ Create admin login page
2. ⏳ Build AdminLayout with sidebar
3. ⏳ Create Dashboard page
   - Statistics cards
   - Recent activity
   - Quick actions
4. ⏳ Build CRUD pages:
   - Manage News
   - Manage Events
   - Manage Departments
   - Manage Faculty
5. ⏳ Create reusable forms:
   - NewsForm
   - EventForm
   - DepartmentForm
   - FacultyForm
6. ⏳ Implement DataTable component
7. ⏳ Add authentication logic (JWT)
8. ⏳ Create protected routes
9. ⏳ Implement role-based access control
10. ⏳ Add image upload functionality

**Files to Create:**
- `client/src/pages/admin/Login.jsx`
- `client/src/pages/admin/Dashboard.jsx`
- `client/src/pages/admin/ManageNews.jsx`
- `client/src/pages/admin/ManageEvents.jsx`
- `client/src/pages/admin/ManageDepartments.jsx`
- `client/src/pages/admin/ManageFaculty.jsx`
- `client/src/components/admin/Sidebar.jsx`
- `client/src/components/admin/DashboardCard.jsx`
- `client/src/components/admin/DataTable.jsx`
- `client/src/components/admin/forms/*`
- `client/src/layouts/AdminLayout.jsx`
- `client/src/hooks/useAuth.js`
- `client/src/services/authService.js`

**Estimated Time:** 4-5 days

**Dependencies:** Backend API (Developer 3), Common components (Developer 1)

---

### 🧪 **Developer 5 - QA & Optimization**
**Branch:** `feature/optimization`

**Responsibilities:**
1. ⏳ Performance optimization
   - Code splitting
   - Lazy loading
   - Image optimization
   - Bundle size analysis
2. ⏳ Accessibility testing
   - ARIA labels
   - Keyboard navigation
   - Screen reader support
   - Color contrast
   - Semantic HTML
3. ⏳ SEO optimization
   - Meta tags
   - Open Graph tags
   - Structured data
   - Sitemap
   - robots.txt
4. ⏳ Cross-browser testing
   - Chrome, Firefox, Safari, Edge
5. ⏳ Responsive testing
   - Mobile (320px - 767px)
   - Tablet (768px - 1023px)
   - Desktop (1024px+)
6. ⏳ Security testing
   - XSS protection
   - CSRF protection
   - SQL injection prevention
7. ⏳ Error boundary implementation
8. ⏳ Write documentation
9. ⏳ Create deployment guide

**Files to Create:**
- `client/src/components/ErrorBoundary.jsx`
- `client/public/robots.txt`
- `client/public/sitemap.xml`
- `docs/DEPLOYMENT.md`
- `docs/API_DOCUMENTATION.md`
- `docs/TESTING.md`
- `.github/workflows/ci.yml` (optional)

**Estimated Time:** 3-4 days

**Dependencies:** All other developers complete their work

---

## 📋 Additional Pages (Distributed)

### Developer 1 (also handles):
- ⏳ `client/src/pages/Contact.jsx`
- ⏳ `client/src/pages/CampusLife.jsx`

### Developer 2 (also handles):
- ⏳ `client/src/pages/Admissions.jsx`
- ⏳ `client/src/pages/Research.jsx`
- ⏳ `client/src/pages/Placements.jsx`
- ⏳ `client/src/pages/NewsDetail.jsx`

---

## 🔄 Git Workflow

### Branch Strategy
```
main (protected)
  ├── feature/frontend-ui (Developer 1)
  ├── feature/academic-pages (Developer 2)
  ├── feature/backend-api (Developer 3)
  ├── feature/admin-dashboard (Developer 4)
  └── feature/optimization (Developer 5)
```

### Commit Convention
```
type(scope): subject

Examples:
feat(navbar): add responsive mobile menu
fix(api): resolve authentication bug
docs(readme): update setup instructions
style(button): improve hover animation
refactor(utils): simplify validation logic
```

### Pull Request Process
1. Create feature branch
2. Make changes & commit
3. Push to GitHub
4. Create PR with description
5. Request code review
6. Address feedback
7. Merge after approval

---

## 🚀 Development Timeline

### Week 1
- **Day 1-2:** Setup & structure (All developers)
- **Day 3-5:** Initial development
  - Dev 1: Common components + Home
  - Dev 3: Backend API setup

### Week 2
- **Day 6-8:** Core features
  - Dev 1: Complete Home page
  - Dev 2: Academic pages
  - Dev 3: Complete all APIs
  - Dev 4: Admin login + layout

### Week 3
- **Day 9-12:** Integration
  - Dev 2: API integration
  - Dev 4: Complete admin CRUD

### Week 4
- **Day 13-15:** Polish & testing
  - Dev 5: QA, optimization, documentation
  - All: Bug fixes

### Week 5
- **Day 16-18:** Final review & deployment

---

## 📞 Communication

### Daily Standup (15 mins)
- What did you complete yesterday?
- What will you work on today?
- Any blockers?

### Code Review
- All PRs need at least 1 approval
- Review within 24 hours

### Documentation
- Comment complex logic
- Update README for new features
- Document API endpoints

---

## ✅ Definition of Done

A task is complete when:
- [ ] Code is written & tested locally
- [ ] Responsive design verified
- [ ] No console errors/warnings
- [ ] Code follows project conventions
- [ ] PR created & reviewed
- [ ] Merged to main branch
- [ ] Documentation updated

---

**Next Steps:**
1. Each developer creates their feature branch
2. Review assigned tasks
3. Ask questions in team chat
4. Begin development!

**Let's build something amazing! 🚀**
