// src/api/auth.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth';

export const registerUser  = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser  = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const verifyToken = async (token) => {
  const response = await axios.get(`${API_URL}/verify`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

