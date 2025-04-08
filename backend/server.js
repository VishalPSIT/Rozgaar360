import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import testRoute from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config(); // Load .env

const app = express();

// ✅ CORS Configuration
const allowedOrigins = ['http://localhost:5173'];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // allow cookies/headers to be sent
  })
);

// ✅ Middleware
app.use(express.json());

// ✅ Connect to DB
connectDB();

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/test', testRoute); // no need to repeat authRoutes twice

// ✅ Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
