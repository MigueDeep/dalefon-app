import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',  
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
})


axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        const backendMessage = error.response?.data?.message || error.message || "Error al realizar la operación";
        toast.error(backendMessage)
        return Promise.reject(new Error(backendMessage));
    }   
)

axiosInstance.interceptors.response.use(
    (response) => {
        const backendMessage = response.data?.message || response.statusText || "Petición realizada con éxito";
        toast.success(backendMessage);
        return response;
    }, (error) => {
        console.log(error)
        let backendMessage = error.response?.data?.message || error.message || "Error al realizar la operación";
        toast.error(backendMessage)
        return Promise.reject(new Error(backendMessage));
    }
)

export const doGet = async <T>(url: string) => {
    return axiosInstance.get<T>(url);
}

export const doPost = async <T>(url: string, data: T) => {
    return axiosInstance.post(url, data)
}

export const doPut = async <T>(url: string, data: T) => {
    //Marca error al actulizar usuarios nuevos 
    console.log("Updating user:", data);
    return axiosInstance.put(url, data);
}

export const doDelete = async (url: string) => {
    return axiosInstance.delete(url);
}