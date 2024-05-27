import { api } from "@/services/api";
import { LoginModel } from "./interfaces";

/**
 * @author: Grazielle Conceição
 * @since: 2024-05-27
 * @param model 
 * @returns 
 */
async function loginService(model: LoginModel) {
    return await api.post('/login', model);
}

export {
    loginService
}