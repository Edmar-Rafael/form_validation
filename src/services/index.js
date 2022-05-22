import axios from 'axios';

const api = () => axios.create({baseURL: 'http://localhost:4000'});

export const endpoints = {
    register: '/user/cadaster',
    login: '/login'
}

export default api;
