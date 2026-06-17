# Student Management System - Backend API

A RESTful API built with **Express.js** and **SQLite** for managing student records with CORS support and comprehensive error handling.

## 🚀 Quick Start

### Installation

```bash
cd StudentAPI
npm install
```

### Environment Setup

Create a `.env` file in the root:

```
PORT=5000
NODE_ENV=development
DATABASE_PATH=./database/students.db
```

### Running the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

Server runs on: **http://localhost:5000**

---

## 📁 Project Structure

```
StudentAPI/
├── src/
│   ├── config/
│   │   └── db.js                    # SQLite database connection
│   ├── controllers/
│   │   └── studentController.js     # Business logic for students
│   ├── middleware/
│   │   └── errorHandler.js          # Global error handling
│   ├── models/
│   │   └── studentModel.js          # Database operations
│   ├── routes/
│   │   └── studentRoutes.js         # Student API endpoints
│   ├── constants/
│   │   └── httpStatus.js            # HTTP status codes
│   ├── utils/
│   │   ├── validators.js            # Input validation
│   │   └── responseHandler.js       # Standardized responses
│   └── app.js                       # Express configuration
├── database/
│   └── students.db                  # SQLite database file
├── server.js                        # Server entry point
├── package.json                     # Dependencies
├── .env                             # Environment variables
├── .gitignore                       # Git ignore rules
└── README.md                        # Documentation
```

---

## 📚 API Endpoints

### Base URL
```
http://localhost:5000/students
```

### 1. **Get All Students**
```http
GET /students
```
**Response:**
```json
[
  {
    "Id": 1,
    "Name": "John Doe",
    "Email": "john@example.com"
  }
]
```

---

### 2. **Get Student by ID**
```http
GET /students/:id
```
**Response:**
```json
{
  "Id": 1,
  "Name": "John Doe",
  "Email": "john@example.com"
}
```

---

### 3. **Create Student**
```http
POST /students
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```
**Response:**
```json
{
  "message": "Student created successfully",
  "id": 2,
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

---

### 4. **Update Student**
```http
PUT /students/:id
Content-Type: application/json

{
  "name": "Jane Smith Updated",
  "email": "jane.updated@example.com"
}
```
**Response:**
```json
{
  "message": "Student updated successfully",
  "id": 2,
  "name": "Jane Smith Updated",
  "email": "jane.updated@example.com"
}
```

---

### 5. **Delete Student**
```http
DELETE /students/:id
```
**Response:**
```json
{
  "message": "Student deleted successfully"
}
```

---

## ✅ Features

- ✅ **CRUD Operations** - Create, Read, Update, Delete students
- ✅ **CORS Enabled** - Access from frontend applications
- ✅ **Validation** - Email and name validation
- ✅ **Error Handling** - Comprehensive error messages
- ✅ **SQLite Database** - Lightweight, file-based storage
- ✅ **Environment Variables** - Secure configuration
- ✅ **Clean Architecture** - Separation of concerns
- ✅ **RESTful Design** - Standard HTTP methods

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | Latest | Runtime |
| Express.js | 5.2.1 | Web Framework |
| SQLite3 | 6.0.1 | Database |
| CORS | 2.8.6 | Cross-origin requests |
| dotenv | 16.4.5 | Environment variables |
| Nodemon | 3.1.0 | Development auto-reload |

---

## 📝 File Descriptions

### `src/config/db.js`
Manages SQLite database connection and initialization. Creates `Students` table if it doesn't exist.

### `src/models/studentModel.js`
Contains all database operations:
- `getAllStudents()` - Fetch all students
- `getStudentById()` - Fetch single student
- `createStudent()` - Insert new student
- `updateStudent()` - Update existing student
- `deleteStudent()` - Remove student

### `src/controllers/studentController.js`
Business logic for handling requests:
- Validates input
- Calls model methods
- Sends responses

### `src/routes/studentRoutes.js`
Defines API routes and maps them to controller methods.

### `src/middleware/errorHandler.js`
Global error handling middleware for all errors.

### `src/utils/validators.js`
Input validation functions for students.

### `src/utils/responseHandler.js`
Standardized response functions for success/error.

---

## 🧪 Testing with Postman

### Import Collection
1. Create a new collection in Postman
2. Add requests for each endpoint
3. Set base URL: `http://localhost:5000`

### Example Tests
- **Create**: POST with JSON body
- **Read**: GET with student ID
- **Update**: PUT with ID and new data
- **Delete**: DELETE with student ID

---

## 🐛 Troubleshooting

**Issue:** Port already in use
```bash
# Change PORT in .env file
PORT=5001
```

**Issue:** Database locked
```bash
# Delete database and restart
rm database/students.db
npm start
```

**Issue:** CORS errors
```bash
# Ensure CORS is enabled in app.js
app.use(cors());
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "express": "^5.2.1",
    "sqlite3": "^6.0.1",
    "cors": "^2.8.6",
    "dotenv": "^16.4.5"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```

---

## 📄 License

ISC License - Open source and free to use.
