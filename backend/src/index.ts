import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import notFound from './middleware/notFound';
import connectDB from './config/db';
import userRouter from './routes/userRoutes';
import errorMiddleware from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// v1 api routes
app.use('/api/v1/auth', userRouter);

// Test Route
app.get('/', );

// Not Found Middleware
app.use(notFound);

// Error Handling Middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
