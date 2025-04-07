import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import testRoute from './routes/testRoutes.js';

dotenv.config(); // Load .env

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // Connect to MongoDB

app.use('/api/test', testRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
