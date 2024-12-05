import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: 'Invalid email format',
      },
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },  // Added role
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  // Only hash if it's not already hashed
  if (!this.password.startsWith('$2b$')) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

export const User = mongoose.model('User', userSchema);
