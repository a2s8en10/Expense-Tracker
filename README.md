# Expense Tracker

A full-stack expense tracker with a React/Vite frontend, an Express backend, MongoDB persistence, JWT authentication, and income and expense reporting.

## Project Structure

- `frontend/` - React and Vite client application
- `backend/` - Express API, authentication, MongoDB models, and routes

## Requirements

- Node.js 18 or newer
- npm
- MongoDB connection string

## Setup

Install dependencies in both applications:

```bash
cd backend
npm install
cd ../frontend
npm install
```

Create `backend/.env`:

```env
MONGO_URI=mongodb://localhost:27017/expense-tracker
JWT_SECRET=replace-with-a-long-random-secret
PORT=4000
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:4000
```

Do not commit either `.env` file. They are ignored by the repository configuration.

## Run Locally

Start the backend from the repository root:

```bash
npm start
```

The API runs at `http://localhost:4000`.

Start the frontend in a second terminal:

```bash
npm --prefix frontend run dev
```

Vite displays the frontend URL in the terminal, normally `http://localhost:5173`.

## Available Commands

### Backend

```bash
cd backend
npm start
```

### Frontend

```bash
cd frontend
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## API Areas

- `/api/user` - registration, login, profile, and password operations
- `/api/income` - income management and exports
- `/api/expense` - expense management and exports
- `/api/dashboard` - dashboard summaries

## Security Notes

Use a strong unique JWT secret and keep database credentials out of source control. If credentials were ever committed or shared, rotate them before deploying.
