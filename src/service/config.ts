import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 5000,
});


axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
