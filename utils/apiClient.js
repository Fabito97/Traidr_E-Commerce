// apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://localhost:7268/api',
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for logging or attaching tokens if needed.
apiClient.interceptors.request.use((config) => {
  // Attach token if it exists
  const token = localStorage.getItem('userToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;
