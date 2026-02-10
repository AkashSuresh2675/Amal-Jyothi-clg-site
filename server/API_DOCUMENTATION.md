# AJCE Website API Documentation

## Base URL
```
Development: http://localhost:5000/api
Production: https://api.ajce.in/api
```

## Authentication

Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### User Roles
- **admin**: Full access to all resources
- **editor**: Can create and edit content (news, events, faculty, departments)

---

## Authentication Endpoints

### 1. Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "admin@ajce.in",
  "password": "admin123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "60d5ec49f1b2c72b8c8e4a1a",
    "name": "Admin User",
    "email": "admin@ajce.in",
    "role": "admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 2. Register User (Admin Only)
```http
POST /api/auth/register
Authorization: Bearer <admin_token>
```

**Request Body:**
```json
{
  "name": "New User",
  "email": "newuser@ajce.in",
  "password": "password123",
  "role": "editor"
}
```

### 3. Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### 4. Update Password
```http
PUT /api/auth/update-password
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword"
}
```

### 5. Logout
```http
POST /api/auth/logout
```

---

## Departments Endpoints

### 1. Get All Departments
```http
GET /api/departments
```

**Response:**
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4a1a",
      "name": "Computer Science and Engineering",
      "code": "CSE",
      "description": "Department description...",
      "hod": "Dr. John Smith",
      "established": "2005-06-15T00:00:00.000Z",
      "facilities": ["Lab 1", "Lab 2"],
      "isActive": true,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### 2. Get Single Department
```http
GET /api/departments/:id
```

### 3. Create Department (Admin/Editor)
```http
POST /api/departments
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "Information Technology",
  "code": "IT",
  "description": "IT Department",
  "hod": "Dr. Sarah Johnson",
  "established": "2010-07-01",
  "vision": "Department vision",
  "mission": "Department mission",
  "facilities": ["Computer Lab", "Network Lab"],
  "achievements": ["Award 1", "Award 2"]
}
```

### 4. Update Department (Admin/Editor)
```http
PUT /api/departments/:id
Authorization: Bearer <token>
```

### 5. Delete Department (Admin)
```http
DELETE /api/departments/:id
Authorization: Bearer <token>
```

---

## Faculty Endpoints

### 1. Get All Faculty
```http
GET /api/faculty?page=1&limit=10&department=<dept_id>&search=<query>
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `department` (optional): Filter by department ID
- `designation` (optional): Filter by designation
- `search` (optional): Search in name, specialization, qualification

**Response:**
```json
{
  "success": true,
  "count": 3,
  "total": 25,
  "totalPages": 3,
  "currentPage": 1,
  "data": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4a1a",
      "name": "Dr. Alice Williams",
      "email": "alice@ajce.in",
      "phone": "+91 9876543210",
      "department": {
        "_id": "60d5ec49f1b2c72b8c8e4a1b",
        "name": "Computer Science and Engineering",
        "code": "CSE"
      },
      "designation": "Professor",
      "qualification": "Ph.D. in Computer Science",
      "specialization": ["Machine Learning", "AI"],
      "experience": 15,
      "image": "path/to/image.jpg",
      "isActive": true
    }
  ]
}
```

### 2. Get Faculty by ID
```http
GET /api/faculty/:id
```

### 3. Get Faculty by Department
```http
GET /api/faculty/department/:departmentId
```

### 4. Create Faculty (Admin/Editor)
```http
POST /api/faculty
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "Dr. New Faculty",
  "email": "newfaculty@ajce.in",
  "phone": "+91 9876543210",
  "department": "60d5ec49f1b2c72b8c8e4a1b",
  "designation": "Assistant Professor",
  "qualification": "Ph.D.",
  "specialization": ["Web Development", "AI"],
  "experience": 5,
  "bio": "Faculty bio...",
  "researchInterests": ["Machine Learning"],
  "socialLinks": {
    "linkedin": "https://linkedin.com/in/profile"
  }
}
```

### 5. Update Faculty (Admin/Editor)
```http
PUT /api/faculty/:id
Authorization: Bearer <token>
```

### 6. Delete Faculty (Admin)
```http
DELETE /api/faculty/:id
Authorization: Bearer <token>
```

---

## News Endpoints

### 1. Get All News
```http
GET /api/news?page=1&limit=10&category=<category>&search=<query>
```

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Items per page
- `category` (optional): Filter by category (announcement, event, achievement, notice, general)
- `tags` (optional): Filter by tags (comma-separated)
- `isPinned` (optional): Filter pinned news (true/false)
- `search` (optional): Text search in title and content

### 2. Get Latest News
```http
GET /api/news/latest/all?limit=5
```

### 3. Get Pinned News
```http
GET /api/news/pinned/all
```

### 4. Get News by ID
```http
GET /api/news/:id
```

### 5. Create News (Admin/Editor)
```http
POST /api/news
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "News Title",
  "content": "Full news content here...",
  "excerpt": "Brief summary",
  "category": "announcement",
  "image": "path/to/image.jpg",
  "tags": ["important", "announcement"],
  "isPinned": true,
  "isPublished": true
}
```

### 6. Update News (Admin/Editor)
```http
PUT /api/news/:id
Authorization: Bearer <token>
```

### 7. Delete News (Admin)
```http
DELETE /api/news/:id
Authorization: Bearer <token>
```

---

## Events Endpoints

### 1. Get All Events
```http
GET /api/events?page=1&limit=10&category=<category>&upcoming=true
```

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Items per page
- `category` (optional): Filter by category (technical, cultural, sports, seminar, workshop, fest, other)
- `department` (optional): Filter by department ID
- `upcoming` (optional): Show only upcoming events (true/false)
- `featured` (optional): Show only featured events (true/false)
- `search` (optional): Search in title, description, venue

### 2. Get Upcoming Events
```http
GET /api/events/upcoming/all?limit=5
```

### 3. Get Featured Events
```http
GET /api/events/featured/all
```

### 4. Get Past Events
```http
GET /api/events/past/all?page=1&limit=10
```

### 5. Get Event by ID
```http
GET /api/events/:id
```

### 6. Create Event (Admin/Editor)
```http
POST /api/events
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "Event Title",
  "description": "Event description...",
  "venue": "Main Auditorium",
  "startDate": "2024-03-15",
  "endDate": "2024-03-16",
  "time": "9:00 AM - 5:00 PM",
  "category": "technical",
  "organizer": "CSE Department",
  "department": "60d5ec49f1b2c72b8c8e4a1b",
  "image": "path/to/image.jpg",
  "registrationRequired": true,
  "registrationLink": "https://register.link",
  "contactPerson": {
    "name": "Contact Name",
    "email": "contact@ajce.in",
    "phone": "+91 9876543210"
  },
  "isPublished": true,
  "isFeatured": true
}
```

### 7. Update Event (Admin/Editor)
```http
PUT /api/events/:id
Authorization: Bearer <token>
```

### 8. Delete Event (Admin)
```http
DELETE /api/events/:id
Authorization: Bearer <token>
```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please enter a valid email"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Not authorized, no token"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Not authorized to access this route"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Server error message"
}
```

---

## Rate Limiting

- **General API**: 100 requests per 15 minutes per IP
- **Authentication**: 5 requests per 15 minutes per IP

---

## File Upload

For endpoints that accept file uploads, use multipart/form-data:

```javascript
const formData = new FormData();
formData.append('image', fileInput.files[0]);
formData.append('title', 'News Title');
// ... other fields

fetch('/api/news', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token
  },
  body: formData
});
```

**File Restrictions:**
- Max file size: 5MB (3MB for images)
- Allowed types: JPEG, PNG, GIF, PDF, DOC, DOCX
- Images only: JPEG, PNG, GIF

---

## Postman Collection

Import the Postman collection for easy API testing:

1. Open Postman
2. Click Import
3. Use the collection file: `postman_collection.json`

---

## Testing

To test the API locally:

1. Start the server: `npm run dev`
2. Use the default credentials:
   - Admin: `admin@ajce.in` / `admin123`
   - Editor: `editor@ajce.in` / `editor123`

---

## Notes

- All timestamps are in ISO 8601 format
- ObjectIDs are MongoDB ObjectIDs (24 character hex strings)
- Boolean values should be `true` or `false` (lowercase)
- Arrays can be empty `[]` if no items
