import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';
import ErrorHandler from '../utils/utility-class';
import asyncHandler from '../utils/asyncHandler';

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token

  if (!token) {
    res.status(401).json({
      message: 'Authentication token is required',
    });
    return;
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    req.user = decoded;  // Attach user info (id, email, role) to request object
    console.log(req.user);  // Log user data for debugging
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({
      message: 'Invalid or expired token',
    });
    return;
  }
};



// Middleware to verify admin role
export const verifyAdmin = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user?.id;
  console.log(userId, "ididdi");

  if (!userId) return next(new ErrorHandler("Saale Login Kr phle", 401));
  const user = await User.findById(userId);
  if (!user) return next(new ErrorHandler("Saale fake id deta hai", 401));
  if (user.role !== "admin") return next(new ErrorHandler("Saale Aukat nahi hai teri", 401));
  next();  // Allow the request to proceed if the user is an admin
});
