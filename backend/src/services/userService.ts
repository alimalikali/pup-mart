import { User } from '../models/userModel';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/token';
import ErrorHandler from '../utils/utility-class';



export const createUser = async (userData: UserData) => {
  const userExists = await User.findOne({ _id: userData._id });
  if (userExists) throw new Error('User already exists');

  const user = await User.create({ ...userData }); // Spread userData

  const token = generateToken(user._id.toString());  // Pass user's ID for token generation
  return { user, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  
  if (!user) throw new ErrorHandler('Invalid email or password', 400);
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)  throw new Error('Invalid password');
  const token = generateToken(user._id.toString()); 
  return { user, token };
};
