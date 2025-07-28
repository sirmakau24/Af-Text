// src/api/messages.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/messages';

export const fetchMessages = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const sendMessage = async (messageData) => {
  const response = await axios.post(API_URL, messageData);
  return response.data;
};
