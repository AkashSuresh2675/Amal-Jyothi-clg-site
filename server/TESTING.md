# Backend Testing Guide

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (running locally or remote connection)
- Postman (for API testing)

### Setup

1. **Install Dependencies**
```bash
cd server
npm install
```

2. **Configure Environment Variables**
```bash
# Copy the example file
cp .env.example .env

# Edit .env with your configuration
```

Required variables:
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `CLIENT_URL`: Frontend URL for CORS

3. **Start MongoDB**
```bash
# If using local MongoDB
mongod
```

4. **Seed Database with Sample Data**
```bash
# Import sample data
npm run seed:import

# Or manually
node utils/seeder.js --import
```

This will create:
- 2 users (admin and editor)
- 4 departments
- 3 faculty members
- 3 news articles
- 3 events

Default credentials:
- **Admin**: `admin@ajce.in` / `admin123`
- **Editor**: `editor@ajce.in` / `editor123`

5. **Start Development Server**
```bash
npm run dev
```

Server will start at `http://localhost:5000`

---

## Manual API Testing

### Using cURL

#### 1. Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@ajce.in",
    "password": "admin123"
  }'
```

Save the returned token for subsequent requests.

#### 2. Get Departments (Public)
```bash
curl http://localhost:5000/api/departments
```

#### 3. Get Faculty (Public)
```bash
curl http://localhost:5000/api/faculty
```

#### 4. Get News (Public)
```bash
curl http://localhost:5000/api/news
```

#### 5. Get Events (Public)
```bash
curl http://localhost:5000/api/events
```

#### 6. Create News (Authenticated)
```bash
curl -X POST http://localhost:5000/api/news \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "title": "New Announcement",
    "content": "This is a test announcement content.",
    "category": "announcement",
    "isPublished": true
  }'
```

---

## Automated Testing

### Test Scripts

Add these to `package.json`:
```json
{
  "scripts": {
    "test": "echo \"Tests will be added\"",
    "test:watch": "echo \"Watch mode for tests\"",
    "seed:import": "node utils/seeder.js --import",
    "seed:delete": "node utils/seeder.js --delete"
  }
}
```

### Testing Checklist

#### Authentication
- [ ] POST `/api/auth/login` with valid credentials
- [ ] POST `/api/auth/login` with invalid credentials
- [ ] GET `/api/auth/me` with valid token
- [ ] GET `/api/auth/me` without token
- [ ] PUT `/api/auth/update-password` with correct current password
- [ ] PUT `/api/auth/update-password` with incorrect current password
- [ ] POST `/api/auth/register` as admin
- [ ] POST `/api/auth/register` as non-admin (should fail)

#### Departments
- [ ] GET `/api/departments` - Get all departments
- [ ] GET `/api/departments/:id` - Get single department
- [ ] POST `/api/departments` - Create department (admin/editor)
- [ ] PUT `/api/departments/:id` - Update department (admin/editor)
- [ ] DELETE `/api/departments/:id` - Delete department (admin only)
- [ ] Verify non-authenticated users cannot create/update/delete

#### Faculty
- [ ] GET `/api/faculty` - Get all faculty
- [ ] GET `/api/faculty?department=<id>` - Filter by department
- [ ] GET `/api/faculty?search=<query>` - Search faculty
- [ ] GET `/api/faculty/:id` - Get single faculty
- [ ] GET `/api/faculty/department/:deptId` - Get faculty by department
- [ ] POST `/api/faculty` - Create faculty (admin/editor)
- [ ] PUT `/api/faculty/:id` - Update faculty (admin/editor)
- [ ] DELETE `/api/faculty/:id` - Delete faculty (admin)
- [ ] Test pagination (page and limit params)

#### News
- [ ] GET `/api/news` - Get all news
- [ ] GET `/api/news?category=<category>` - Filter by category
- [ ] GET `/api/news?search=<query>` - Search news
- [ ] GET `/api/news/latest/all` - Get latest news
- [ ] GET `/api/news/pinned/all` - Get pinned news
- [ ] GET `/api/news/:id` - Get single news (increments views)
- [ ] POST `/api/news` - Create news (admin/editor)
- [ ] PUT `/api/news/:id` - Update news (admin/editor)
- [ ] DELETE `/api/news/:id` - Delete news (admin)
- [ ] Verify view count increments on each GET
- [ ] Test pagination

#### Events
- [ ] GET `/api/events` - Get all events
- [ ] GET `/api/events?upcoming=true` - Get upcoming events
- [ ] GET `/api/events?category=<category>` - Filter by category
- [ ] GET `/api/events/upcoming/all` - Get upcoming events
- [ ] GET `/api/events/featured/all` - Get featured events
- [ ] GET `/api/events/past/all` - Get past events
- [ ] GET `/api/events/:id` - Get single event
- [ ] POST `/api/events` - Create event (admin/editor)
- [ ] PUT `/api/events/:id` - Update event (admin/editor)
- [ ] DELETE `/api/events/:id` - Delete event (admin)
- [ ] Verify date validation (endDate > startDate)
- [ ] Test pagination

#### File Uploads
- [ ] Test image upload (valid format)
- [ ] Test image upload (invalid format - should fail)
- [ ] Test file size limit (3MB for images, 5MB for files)
- [ ] Test multiple file upload

#### Error Handling
- [ ] Invalid MongoDB ObjectID format returns 400/500
- [ ] Non-existent resource returns 404
- [ ] Missing required fields returns 400
- [ ] Invalid credentials return 401
- [ ] Insufficient permissions return 403
- [ ] Rate limiting works (429 after limit)

#### Edge Cases
- [ ] Empty arrays/strings handled properly
- [ ] Special characters in search queries
- [ ] Very long text in content fields
- [ ] Concurrent updates to same resource
- [ ] Database connection failure handling

---

## Testing with Postman

### Import Collection

1. Open Postman
2. Click "Import"
3. Select `postman_collection.json` from server directory
4. Collection will be imported with all endpoints

### Environment Setup

Create a Postman environment with:
- `base_url`: `http://localhost:5000/api`
- `token`: (leave empty, will be set after login)

### Using the Collection

1. Run "Login" request first
2. Token will be automatically saved to environment
3. All authenticated requests will use this token
4. Run requests in any order

---

## Performance Testing

### Load Testing with Apache Bench

```bash
# Test GET endpoint (100 requests, 10 concurrent)
ab -n 100 -c 10 http://localhost:5000/api/departments

# Test POST endpoint with authentication
ab -n 50 -c 5 -p data.json -T application/json \
  -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:5000/api/news
```

### Expected Response Times
- GET requests: < 200ms
- POST/PUT requests: < 500ms
- File uploads: < 2s

---

## Database Testing

### Verify Data Integrity

```javascript
// Connect to MongoDB
mongosh ajce-website

// Check collections
show collections

// Count documents
db.users.countDocuments()
db.departments.countDocuments()
db.faculty.countDocuments()
db.news.countDocuments()
db.events.countDocuments()

// View sample documents
db.users.findOne()
db.departments.find().pretty()
```

### Test Relationships

```javascript
// Verify faculty-department relationship
db.faculty.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "department",
      foreignField: "_id",
      as: "departmentInfo"
    }
  }
])

// Verify news author relationship
db.news.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "author",
      foreignField: "_id",
      as: "authorInfo"
    }
  }
])
```

---

## Common Issues & Solutions

### Issue: Cannot connect to MongoDB
**Solution:** 
- Ensure MongoDB is running: `mongod`
- Check MONGODB_URI in .env file
- Verify network connectivity

### Issue: JWT token expired
**Solution:** 
- Login again to get a new token
- Check JWT_EXPIRE setting in .env

### Issue: Validation errors
**Solution:** 
- Check API documentation for required fields
- Verify data types match schema
- Check field length restrictions

### Issue: Permission denied (403)
**Solution:** 
- Verify user role (admin/editor)
- Check endpoint requires correct role
- Re-login to refresh token

### Issue: File upload fails
**Solution:** 
- Check file size (max 5MB)
- Verify file type is allowed
- Ensure uploads directory exists
- Check disk space

---

## Clean Up

### Reset Database
```bash
# Delete all data
npm run seed:delete

# Re-import fresh data
npm run seed:import
```

### Clear Uploads
```bash
# Remove all uploaded files
rm -rf uploads/*
# Recreate directory
mkdir -p uploads
```

---

## Continuous Integration

### GitHub Actions (Future)

Create `.github/workflows/test.yml`:
```yaml
name: API Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      mongodb:
        image: mongo:latest
        ports:
          - 27017:27017
    
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```

---

## Test Coverage Goals

- Unit Tests: 80%+ coverage
- Integration Tests: All endpoints
- E2E Tests: Critical user flows
- Security Tests: Authentication & Authorization

---

## Next Steps

1. ✅ Manual testing of all endpoints
2. ⬜ Write unit tests (Jest/Mocha)
3. ⬜ Write integration tests
4. ⬜ Setup CI/CD pipeline
5. ⬜ Performance optimization
6. ⬜ Security audit
