# Week 7 MERN Stack Deployment Assignment

This project is a simple MERN (MongoDB, Express, React, Node.js) stack application deployed using **Render** for the backend and **Vercel** for the frontend.

---

## 🌐 Live Links

- **Frontend (Vercel):** [https://week-7-devops-deployment-assignment-one.vercel.app](https://week-7-devops-deployment-assignment-one.vercel.app)
- **Backend (Render):** [https://week-7-devops-deployment-assignment-x88-j6lw.onrender.com](https://week-7-devops-deployment-assignment-x88-j6lw.onrender.com)

---

## 🚀 Technologies Used

### Client
- React 19
- Vite
- Deployed to Vercel

### Server
- Node.js
- Express
- dotenv for environment configuration
- Deployed to Render

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Setup Environment Variables

#### For the server (`/server/.env`):

```
PORT=5000
```

> You can add more variables like `MONGO_URI` or `CLIENT_ORIGIN` as needed.

---

## 📦 Scripts

### Client

```bash
cd client
pnpm install
pnpm run dev  # Start development
pnpm run build # Build for production
```

### Server

```bash
cd server
pnpm install
pnpm start
```

---

## 📁 Project Structure

```
.
├── client/         # React frontend
└── server/         # Express backend
```

---

## ✅ Deployment

### Backend (Render)

1. Create a new Web Service.
2. Use the `/server` directory.
3. Set the `Start Command` to: `pnpm start`
4. Add any necessary environment variables.

### Frontend (Vercel)

1. Import project from GitHub.
2. Set the root directory to `/client`.
3. Vercel automatically detects Vite and deploys.

---

## 🙌 Author

- Deployment by [x88-code](https://github.com/x88-code)
