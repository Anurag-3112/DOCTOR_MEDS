<!-- <p align="center">
  <img src="assets/logo.png" alt="Doctor Meds Logo" style="width:80%; max-width:1000px; min-width:300px;" />
</p> -->

# MediCare - MERN Patient Management System

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-brightgreen)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)

> A complete MERN-based Patient Management System for managing hospital operations, appointments, prescriptions, user roles, doctor schedules, and more.

🌐 **Live Demo:** https://medicare-seven-phi.vercel.app/

---

## Overview

MediCare is designed to streamline hospital workflows by enabling efficient management of patients, doctors, and administrative tasks. It ensures secure access, organized records, and smooth communication between stakeholders.

---

## Features

-  JWT-based user authentication and authorization
-  Role-based access for Admins, Doctors, and Patients
-  Doctor schedule setup and availability checking
-  Book, view, cancel patient appointments
-  Generate and track prescriptions
-  Secure patient record management
-  Input validation with express-validator
-  Centralized error handling and logging
-  Postman-ready API endpoints
-  Swagger documentation for API testing

---

## Technologies Used 

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt
- **Dev Tools**: dotenv, nodemon, express-validator
- **Docs**: Swagger, Postman
- **CI/CD**: GitHub Actions

---

## Installation & Setup

### 1. Clone the repository:

```bash
git clone https://github.com/Anurag-3112/DOCTOR_MEDS.git
cd DOCTOR_MEDS
```
### 2. Setup the backend:

```bash
cd backend
npm install
```
### 3. Configure backend environment variables: Create a .env file inside the backend/ folder and add the following:

```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/doctor_meds
JWT_SECRET=your_jwt_secret
```
Note: Replace the values with your own credentials. Never commit your .env file to version control.

### 4. Start the backend development server:

```bash
npm run dev
```
### 5. Setup the frontend (in a new terminal):

```bash
cd frontend
npm install
```
### 6. Start the frontend development server:

```bash
npm run dev
```

## 📂 Project Structure
```
│
DOCTOR_MEDS/
├── backend/
│ ├── models/ # Mongoose schemas
│ ├── node_modules/ # Backend dependencies
│ ├── routes/ # Express routes
│ ├── createAdmin.js # Script to create initial admin user
│ ├── .env # Environment variables file
│ ├── server.js # Entry point for backend
│ └── package.json # Backend dependencies and scripts
│
├── frontend/
│ ├── src/ # React application source code
│ ├── ml-model-api/
│ ├── node_modules/ # Frontend dependencies
│ ├── public/ # Static files
│ ├── index.html # Main HTML template
│ └── package.json # Frontend dependencies and scripts
│
└── README.md # Project documentation
```

## 📬 Contact

For any queries, feedback, or collaboration opportunities, feel free to reach out:

👤 **Anurag Kumar**  
📧 Email: [email_to_anurag](mailto:kumar.anurag.connect@gmail.com)  
🔗 GitHub: [@Anurag-3112](https://github.com/Anurag-3112)
