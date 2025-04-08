import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Use env variable in production
  withCredentials: true, // Only if you're using cookies
});

export default axiosInstance;
