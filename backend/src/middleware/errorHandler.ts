import { Request, Response, NextFunction } from 'express';



const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message || 'Server Error',
  });
};

export default errorMiddleware;
