import express from 'express';
import { loginUserController, registerUser } from '../controllers/userController';
import { verifyAdmin, verifyToken } from '../middleware/verifyRole';

const userRouter = express.Router();

// Public Routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUserController);

// Admin Protected Route (Only admins can access this)
userRouter.get('/admin-dashboard', verifyToken, verifyAdmin, (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Admin Dashboard',
    user: req.user, // User details available from the token
  });
});

export default userRouter;
