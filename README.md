<p align="center" style="white-space: nowrap; display: inline-block;">
  <img src="https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-success?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge" />
</p>

# Finance Visualizer

A modern personal expense tracker built with React + TypeScript (frontend) and Express + MongoDB (backend).
It helps users add, view, and analyze transactions with a clean dashboard UI, category charts, and monthly spending trends.


## Features

- Dashboard with charts (category-wise & monthly trends)

- Transaction Management (Add, View, List)

- REST API with Express + MongoDB

- Modern UI with Tailwind CSS

- Dockerized Setup for easy deployment

- Fully integrated using docker-compose (Frontend + Backend + MongoDB)

## Tech Stack

- Frontend → React, TypeScript, Tailwind CSS, Vite

- Backend → Node.js, Express.js, MongoDB

- Database → MongoDB

- Deployment → Docker & docker-compose

## Folder Structure
```
├── api/                  # Backend (Express + MongoDB)
│   ├── config/           # DB connection
│   ├── controllers/      # Business logic
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── index.js          # Entry point
│   └── Dockerfile
├── client/               # Frontend (React + TS + Vite)
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── hooks/        # Custom hooks
│   │   ├── pages/        # Different pages (Dashboard, Charts, Transactions)
│   │   └── main.tsx
│   ├── index.html
│   └── Dockerfile
├── docker-compose.yaml   # Runs frontend + backend + MongoDB
└── README.md
```
## 1) Run with Docker
#### Clone the repo
```
git clone https://github.com/ashankgupta/finance-visualizer.git
cd finance-visualizer
```

#### Setup Environment Variables
Copy the example environment files and update them for Docker:
```
cp api/.env.example api/.env
cp client/.env.example client/.env
```
- In `api/.env`, set `MONGO_URI=mongodb://mongodb:27017/`
- In `client/.env`, set `VITE_API_BASE_URL=http://backend:3001`

#### Start all services (frontend + backend + db)
```
docker-compose up --build
```
#### Access the app

- Frontend → http://localhost:5173

- Backend API → http://localhost:3001/api

- MongoDB → mongodb://localhost:27019/finance

## 2) Running Without Docker

#### Setup Environment Variables
Copy the example environment files:
```
cp api/.env.example api/.env
cp client/.env.example client/.env
```

#### MongoDB Setup
Install MongoDB locally and ensure it's running on the default port (27017).

#### Backend (API)
```
cd api
npm install
npm start
```
By default backend will be on:
http://localhost:3001

#### Frontend (Client)
```
cd client
npm install
npm run dev
```
By default frontend will be on:
http://localhost:5173

## API Routes

```
Method	Endpoint	            Description
POST	/api/transactions	    Add a new transaction
GET	    /api/transactions	    Get all transactions
DELETE	/api/transactions/:id   Delete a Transaction
```
## Contributing

- Fork this repo

- Create a feature branch (feature/awesome-feature)

- Commit & push your changes

- Open a Pull Request

## License

This project is licensed under the MIT License.
