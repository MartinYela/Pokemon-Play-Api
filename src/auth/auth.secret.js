import dotenv from 'dotenv';
dotenv.config()

export const secretLogin = process.env.SECRETLOGIN;
export const secret = process.env.SECRET;
export const salt = process.env.SALT;