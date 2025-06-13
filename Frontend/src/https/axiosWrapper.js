import axios from 'axios';

const axiosWrapper = axios.create({
    baseURL: 'https://restaurant-pos-system-mern.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export { axiosWrapper }; 