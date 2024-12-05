import { Request, Response } from 'express';
import { createUser, loginUser } from '../services/userService';
import asyncHandler from '../utils/asyncHandler';
import { registerValidation, loginValidation } from '../validators/userValidation';

export const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { error } = registerValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { name, email, password ,_id } = req.body;
  const { user, token } = await createUser({ name, email, password, _id });

  res.status(201).json({
    message: 'User registered successfully',
    user,
    token,
  });
});

export const loginUserController = asyncHandler(async (req: Request, res: Response) => {
  const { error } = loginValidation.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  const { email, password } = req.body;
  const { user, token } = await loginUser(email, password);

  res.status(200).json({
    message: 'User logged in successfully',
    user,
    token,
  });
});
