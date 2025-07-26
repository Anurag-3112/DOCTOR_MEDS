<p align="center">
  <img src="assets/logo.png" alt="Doctor Meds Logo" style="width:80%; max-width:1000px; min-width:300px;" />
</p>

# 🏥 DOCTOR_MEDS

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-brightgreen)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)

> A complete RESTful API for managing hospital operations including appointments, prescriptions, user roles, doctor schedules & more.

---

## 📚 Table of Contents

- [📦 Installation](#-installation)
- [🚀 Features](#-features)
- [🔧 Technologies Used](#-technologies-used)
- [📂 Project Structure](#-project-structure)
- [📮 API Endpoints](#-api-endpoints)
- [🧪 Postman Collection](#-postman-collection)
- [📖 API Documentation (Swagger)](#-api-documentation-swagger)
- [⚙️ CI/CD Pipeline](#️-cicd-pipeline)
- [📸 Demo / Screenshots](#-demo--screenshots)
- [🛠️ Contributing](#️-contributing)
- [📜 License](#-license)
- [📬 Contact](#-contact)

---

## 🚀 Features

- ✅ JWT-based user authentication and authorization
- 🧑‍⚕️ Role-based access for Admins, Doctors, and Patients
- 🗓️ Doctor schedule setup and availability checking
- 📅 Book, view, cancel patient appointments
- 💊 Generate and track prescriptions
- 📂 Secure patient record management
- 📌 Input validation with express-validator
- 📈 Centralized error handling and logging
- 🧪 Postman-ready API endpoints
- 📘 Swagger documentation for API testing

---

## 🔧 Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt
- **Dev Tools**: dotenv, nodemon, express-validator
- **Docs**: Swagger, Postman
- **CI/CD**: GitHub Actions

---

## 📦 Installation

```bash
git clone https://github.com/Anurag-3112/DOCTOR_MEDS.git
cd DOCTOR_MEDS
npm install
