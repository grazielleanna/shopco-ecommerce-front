import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
});

api.interceptors.response.use(async function (config) {
    return config;
}, (error: AxiosError) => {

    if (error.request.status === 400) {
        const responseData = error.response?.data as any;
        const errorsQuantity = responseData?.errors?.length;

        if (errorsQuantity > 0) {
            const messages =  responseData?.errors.map((item: any) => item.message).toString();
            toast.error(messages);
        }

        return Promise.reject(error)
    }
    return Promise.reject(error)
})
export {
    api
}