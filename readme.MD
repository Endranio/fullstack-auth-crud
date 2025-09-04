

# 🛠️ Widya Group – Authentication & Product CRUD

## 📌 Overview

Proyek ini adalah **REST API + User Interface** sederhana yang menyediakan fitur:

* Registrasi & Login User (Autentikasi dengan JWT)
* Akses Profil User
* CRUD Produk dengan pagination
* Integrasi **Frontend (Next.js, React, Redux, ShadCN UI)** dan **Backend (Express.js, Prisma, PostgreSQL)** dalam satu monorepo.

Repo ini dibuat sebagai latihan/tes untuk membangun aplikasi fullstack dengan fokus pada **fungsionalitas, clean code, dan kemudahan penggunaan**.

---

## 🚀 Features

### 🔑 Authentication

* Register (name, email, password, gender)
* Login (JWT-based)
* Profile (protected route)

### 📦 Product Management

* Create, Read, Update, Delete Product
* Pagination & Sorting (by newest)
* Hanya user yang login dapat mengakses produknya


## 🏗️ Tech Stack

**Backend:**

* [Express.js](https://expressjs.com/) – Web framework
* [Prisma](https://www.prisma.io/) – ORM
* [PostgreSQL](https://www.postgresql.org/) – Database
* [JWT](https://jwt.io/) – Authentication

**Frontend:**

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [Redux Toolkit](https://redux-toolkit.js.org/) – State Management
* [ShadCN UI](https://ui.shadcn.com/) + [TailwindCSS](https://tailwindcss.com/) – Styling


---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repo

```bash
git clone https://github.com/username/tht.git
cd tht
```

### 2️⃣ Backend Setup

```bash
cd backend
cp .env.example .env   # isi DATABASE_URL & JWT_SECRET
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

Backend berjalan di: **[http://localhost:5000](http://localhost:5000)**

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend berjalan di: **[http://localhost:3000](http://localhost:3000)**

---



## 🧪 Example Seed Data

User default (hasil seeding):

```
email: user1@example.com
password: password1

email: user2@example.com
password: password2

email: user3@example.com
password: password3
```

Masing-masing user memiliki **20 product dummy**.

---

## 👨‍💻 Author

* **Endranio Palupi** – Fullstack Developer

