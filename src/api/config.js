import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const API = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add request interceptor to include auth token
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('studentToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// API endpoints
export const endpoints = {
    // Auth endpoints
    login: '/auth/student/login',
    
    // Leave endpoints
    createLeave: '/leaves/create',
    getAllLeaves: '/leaves/student',
    updateLeave: '/leaves/update',
    
    // Outing endpoints
    createOuting: '/outings/create',
    getAllOutings: '/outings/student',
    updateOuting: '/outings/update',
    
    // Student profile endpoints
    getProfile: '/students/profile',
    updateProfile: '/students/profile/update',
    
    // Leave History
    getLeaveHistory: '/leave-history/student',
    
    // Outing History
    getOutingHistory: '/outing-history/student'
};

export default API; 