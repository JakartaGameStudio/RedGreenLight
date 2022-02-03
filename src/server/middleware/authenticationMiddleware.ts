import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { ApiEndpoints, ApiUrl } from 'types/Api';

export const authenticationMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const res = await axios.get(`${ApiUrl.praktikum}${ApiEndpoints.identify}`, {
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
