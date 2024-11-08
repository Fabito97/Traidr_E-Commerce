// apiClient.js
import axios from "axios";

const apiFileClient = axios.create({
  baseURL: 'https://localhost:7268/api'
});

// Optional: Add interceptors for logging or attaching tokens if needed.
apiFileClient.interceptors.request.use((config) => {
  // Attach token if it exists
  const token = localStorage.getItem('userToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiFileClient;
