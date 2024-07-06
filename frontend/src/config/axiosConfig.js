// src/api/axiosConfig.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors and export the instance as before

export default API;