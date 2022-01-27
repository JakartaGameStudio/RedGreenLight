import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

export const authenticationMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const res = await axios.get('https://ya-praktikum.tech/api/v2/auth/user', {
      withCredentials: true,
      headers: {
        Cookie: request.headers.cookie || '',
      },
    });

    response.locals.user = res.data;

    return next();
  } catch (error) {
    response.status(error.response.status).json(error.response.data);
  }
};
