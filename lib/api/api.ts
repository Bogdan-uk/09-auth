import axios from 'axios';

export const nextServer = axios.create({
  // baseURL: 'http://localhost:3000',

  baseURL: process.env.NEXT_PUBLIC_API_URL + '/api',
  withCredentials: true,
});
