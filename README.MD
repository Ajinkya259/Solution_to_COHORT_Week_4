# COHORT Assignment Solutions

This repository contains the solutions to two assignments related to building a course-selling website. Each solution is implemented with different authentication mechanisms and uses MongoDB as the persistent data store.

## Table of Contents
- [Assignment 1: Course Selling Website (Basic Auth)](#assignment-1-course-selling-website-basic-auth)
- [Assignment 2: Course Selling Website (JWT Auth)](#assignment-2-course-selling-website-jwt-auth)
- [Installation](#installation)
- [How to Run](#how-to-run)
- [Technologies Used](#technologies-used)

---

## Assignment 1: Course Selling Website (Basic Auth)

### Description
This solution implements a course-selling website that supports two types of users: Admins and Users. The authentication in this version is done through username and password sent in the request headers (no JWT is used). MongoDB is used to store the data persistently.

### Features

#### Admin Routes:
1. `POST /admin/signup` - Admin sign-up.
2. `POST /admin/courses` - Create a new course.
3. `GET /admin/courses` - List all the courses.

#### User Routes:
1. `POST /users/signup` - User sign-up.
2. `GET /users/courses` - View all courses.
3. `POST /users/courses/:courseId` - Purchase a course.
4. `GET /users/purchasedCourses` - View purchased courses.

---

## Assignment 2: Course Selling Website (JWT Auth)

### Description
This solution improves the previous course-selling website by adding JWT-based authentication. Both Admins and Users can sign in, and JWT tokens are used for all authenticated routes.

### Features

#### Admin Routes:
1. `POST /admin/signup` - Admin sign-up.
2. `POST /admin/signin` - Admin sign-in to obtain JWT.
3. `POST /admin/courses` - Create a new course.
4. `GET /admin/courses` - List all the courses.

#### User Routes:
1. `POST /users/signup` - User sign-up.
2. `POST /users/signin` - User sign-in to obtain JWT.
3. `GET /users/courses` - View all courses.
4. `POST /users/courses/:courseId` - Purchase a course.
5. `GET /users/purchasedCourses` - View purchased courses.

---

## Installation

1. Clone this repository:
    ```bash
    git clone <repository-url>
    ```
2. Install dependencies:
    ```bash
    cd <repository-folder>
    npm install
    ```

3. Set up your MongoDB instance and create a `.env` file with your MongoDB connection string:
    ```bash
    MONGO_URI=mongodb://localhost:27017/course-selling-app
    ```

---

## How to Run

1. Start the Node.js server:
    ```bash
    npm start
    ```

2. Use the provided routes (mentioned in the assignments) to test the functionality using Postman or cURL.

---

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT (for the second assignment)
