import axios from "axios";
import apiClient from "./apiClient";
import apiFileClient from './apiFileClient'


const baseUrl = 'https://localhost:7268/api';
const productApiUrl = `${baseUrl}/Product`;

// Get all products
export const getData = async (url) => {
    try {
        const res = await apiClient.get(`/${url}`);
        console.log(res.data.data);
        console.log(res.data.data);

        return res.data.data.$values ? res.data.data.$values : res.data.data ? res.data.data : res.data;
    } catch (error) {
        console.error("Error:", error);
       throw error.response?.data || new Error("Unknown error")
    }
};

export const getShopData = async (url) => {
    try {
        const res = await apiClient.get(`/${url}`);
        
        return res.data
    } catch (error) {
        console.error("Error:", error);
       throw error.response?.data || new Error("Unknown error")
    }
};

// Get a single product by ID
export const getDataById = async (id) => {
    try {
        const res = await apiClient.get(`${productApiUrl}/${id}`);
        return res.data.data.$values;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
    }
};


export const postData = async ({ url, data }) => {
    console.log("Data being sent:", data);
    try {
        const res = await apiClient.post(`/${url}`, data);
        return res.data;
    } catch (error) {
        console.error("Error:", error);
       throw error.response?.data || new Error("Unknown error")
    }
};

export const postFormData = async ({ url, data }) => {
    console.log("Data being sent:", data);
    try {
        const res = await apiFileClient.post(`/${url}`, data);
        return res.data;
    } catch (error) {
        console.error("Error:", error);
       throw error.response?.data || new Error("Unknown error")
    }
};

// Add a new user
export const addUser = async (user) => {
    try {
        const res = await axios.post(`${baseUrl}/User/sign-up`, user, {
            headers: { "Content-Type": "application/json" }
        });
        return res.data;
    } catch (error) {
        console.error("Error signing up user:", error);
    }
};

// Get all users
export const getUser = async () => {
    try {
        const res = await axios.get(`${baseUrl}/User`);
        return res.data;
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

// Create a new order
export const createOrder = async (orderData) => {
    try {
        const res = await axios.post(`${baseUrl}/Order/create-order`, orderData, {
            headers: { "Content-Type": "application/json" }
        });
        return res.data;
    } catch (error) {
        console.error("Error creating order:", error);
    }
};

// Get all orders
export const getOrders = async () => {
    try {
        const res = await axios.get(`${baseUrl}/Order/create-order`);
        return res.data;
    } catch (error) {
        console.error("Error fetching orders:", error);
    }
};

// Get a single order by ID
export const getOrder = async (id) => {
    try {
        const res = await axios.get(`${baseUrl}/Order/create-order/${id}`);
        return res.data;
    } catch (error) {
        console.error(`Error fetching order with ID ${id}:`, error);
    }
};

// Add more API functions as needed

