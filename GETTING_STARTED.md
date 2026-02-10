# 🚦 Quick Start Guide

## 📥 For All Developers

### 1. Clone & Setup
```bash
git clone https://github.com/AkashSuresh2675/Amal-Jyothi-clg-site.git
cd Amal-Jyothi-clg-site
```

### 2. Create Your Feature Branch
```bash
# Developer 1
git checkout -b feature/frontend-ui

# Developer 2
git checkout -b feature/academic-pages

# Developer 3
git checkout -b feature/backend-api

# Developer 4
git checkout -b feature/admin-dashboard

# Developer 5
git checkout -b feature/optimization
```

---

## 🎨 Developer 1 - Frontend UI

### Step 1: Initialize React Project
```bash
cd client
npm create vite@latest . -- --template react
```

### Step 2: Install Dependencies
```bash
npm install react-router-dom axios framer-motion react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Install ShadCN UI
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input select
```

### Step 4: Start Your Tasks
- Refer to `TASKS.md` - Developer 1 section
- Create files in `client/src/components/common/`
- Build Home page components

---

## 📚 Developer 2 - Academic Pages

### Step 1: Wait for Developer 1
✅ Developer 1 must complete:
- Project setup
- Common components
- Base layout

### Step 2: Start Building
```bash
cd client/src/pages
# Create your page files
```

### Step 3: Create Services
```bash
cd client/src/services
# Create API service files
```

### Step 4: Integrate APIs
- Use axios for API calls
- Implement error handling
- Add loading states

---

## ⚙️ Developer 3 - Backend Engineer

### Step 1: Install Dependencies
```bash
cd server
npm install
```

### Step 2: Setup Environment
```bash
cp .env.example .env
# Edit .env with your MongoDB connection string
```

### Step 3: Complete Missing Files
- `server.js` - Main entry point
- Controllers (faculty, news, event)
- Routes for all endpoints
- Upload middleware

### Step 4: Test APIs
```bash
npm run dev
# Test with Postman/Thunder Client
```

### Step 5: Seed Database
```bash
node utils/seeder.js
```

---

## 🔐 Developer 4 - Admin Dashboard

### Step 1: Wait for Dependencies
✅ Required:
- Developer 1: Common components + Layout
- Developer 3: Auth API ready

### Step 2: Create Admin Components
```bash
cd client/src/components/admin
# Create Sidebar, DataTable, Forms
```

### Step 3: Build Admin Pages
```bash
cd client/src/pages/admin
# Create Login, Dashboard, Manage pages
```

### Step 4: Implement Auth
- Create auth service
- Add JWT handling
- Protected routes

---

## 🧪 Developer 5 - QA & Optimization

### Step 1: Wait for All Features
✅ Required:
- All developers complete their core tasks

### Step 2: Performance Testing
```bash
cd client
npm run build
npm run preview
# Test bundle size
```

### Step 3: Run Audits
- Lighthouse audit
- Accessibility scan
- Security check

### Step 4: Documentation
- Complete all docs in `/docs`
- Update README

---

## 🔄 Daily Git Workflow

### Morning Routine
```bash
# Pull latest changes
git checkout main
git pull origin main

# Switch to your branch
git checkout feature/your-branch
git merge main
```

### After Completing a Task
```bash
git add .
git commit -m "feat(component): add description"
git push origin feature/your-branch
```

### Create Pull Request
1. Go to GitHub repository
2. Click "Pull Requests" > "New Pull Request"
3. Select your branch
4. Add description of changes
5. Request review from team
6. Wait for approval & merge

---

## 📞 Team Communication

### Daily Standup Template
```
✅ Yesterday: What I completed
🚀 Today: What I'm working on
🚧 Blockers: Any issues
```

### PR Review Checklist
- [ ] Code follows conventions
- [ ] No console errors
- [ ] Responsive design works
- [ ] Tested locally
- [ ] Comments added for complex code

---

## 🆘 Common Issues & Solutions

### Issue: MongoDB connection fails
**Solution:**
```bash
# Check MongoDB is running
# Verify .env MONGODB_URI is correct
# Use MongoDB Atlas for cloud database
```

### Issue: CORS errors
**Solution:**
```javascript
// In server.js
app.use(cors({
  origin: process.env.CLIENT_URL
}));
```

### Issue: Module not found
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: Tailwind styles not working
**Solution:**
```javascript
// Check tailwind.config.js
content: ["./src/**/*.{js,jsx}"]
```

---

## 📚 Helpful Resources

- **React Router:** https://reactrouter.com/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **ShadCN UI:** https://ui.shadcn.com/
- **Framer Motion:** https://www.framer.com/motion/
- **Express.js:** https://expressjs.com/
- **Mongoose:** https://mongoosejs.com/

---

## ✅ Before You Start Coding

1. Read `README.md` completely
2. Review `PROJECT_STRUCTURE.md`
3. Check your tasks in `TASKS.md`
4. Create your feature branch
5. Join team communication channel
6. Ask questions if unclear!

---

**Happy Coding! 🚀**
