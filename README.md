# Student API

A simple Express.js REST API for managing student records using SQLite database.

## Project Structure

```
StudentAPI/
│
├── node_modules/
│
├── src/
│   │
│   ├── config/
│   │   └── db.js                 # Database configuration
│   │
│   ├── controllers/
│   │   └── studentController.js  # Business logic for students
│   │
│   ├── models/
│   │   └── studentModel.js       # Database operations
│   │
│   ├── routes/
│   │   └── studentRoutes.js      # API route definitions
│   │
│   ├── middleware/
│   │   └── errorHandler.js       # Global error handling
│   │
│   └── app.js                     # Express app configuration
│
├── database/
│   └── students.db               # SQLite database file
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js                      # Application entry point
```

## Installation

```bash
npm install
```

## Running the Server

```bash
node server.js
```

The server will run on `http://localhost:5000`

## API Endpoints

### Get All Students
- **GET** `/students`
- Response: Array of all students

### Get Student by ID
- **GET** `/students/:id`
- Response: Student object

### Create Student
- **POST** `/students`
- Body: `{ "name": "John Doe", "email": "john@example.com" }`
- Response: Confirmation with student ID

### Update Student
- **PUT** `/students/:id`
- Body: `{ "name": "Jane Doe", "email": "jane@example.com" }`
- Response: Confirmation of update

### Delete Student
- **DELETE** `/students/:id`
- Response: Confirmation of deletion

## Architecture

This project follows the **MVC (Model-View-Controller)** pattern:

- **Models**: Handle database operations (`studentModel.js`)
- **Controllers**: Contain business logic (`studentController.js`)
- **Routes**: Define API endpoints (`studentRoutes.js`)
- **Config**: Database configuration (`db.js`)
- **Middleware**: Error handling and custom middleware

## Technologies Used

- **Express.js**: Web framework
- **SQLite3**: Database
- **Node.js**: Runtime environment
