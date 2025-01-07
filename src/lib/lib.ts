import { SessionData } from '@/types';
import { SessionOptions } from 'iron-session';

export const sessionOptions: SessionOptions = {
  password: process.env.AUTH_KEY!,
  cookieName: 'carsewa_session',
  cookieOptions: {
    httpOnly: true,
    secure: true,
  },
};

export const defaultSession: SessionData = {
  isLoggedIn: false,
};
