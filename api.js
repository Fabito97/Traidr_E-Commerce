// src/api.js
const API_KEY = import.meta.env.VITE_API_KEY;

const productApiUrl = import.meta.env.VITE_PRODUCT_API_URL;
const userApiUrl = import.meta.env.VITE_USER_API_URL;
const orderApiUrl = import.meta.env.VITE_ORDER_API_URL;

// Generic function to handle API requests
const fetchApi = async (url, options = {}) => {
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

// API functions
export const getProducts = () => {
    return fetchApi(productApiUrl);
};

export const getUser = (userId) => {
    return fetchApi(`${userApiUrl}/${userId}`);
};

export const createOrder = (orderData) => {
    return fetchApi(orderApiUrl, {
        method: 'POST',
        body: JSON.stringify(orderData),
    });
};

// Add more API functions as needed


// Example of how to import it in your component
// import { createOrder } from '../api';