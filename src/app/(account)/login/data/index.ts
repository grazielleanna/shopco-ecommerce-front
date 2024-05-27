import { api } from "@/services/api";
import { LoginModel, LoginResponseService } from "./interfaces";

/**
 * @author: Grazielle Conceição
 * @since: 2024-05-27
 * @param model 
 * @returns 
 */
async function loginService(model: LoginModel) {
    const { data } = await api.post<LoginResponseService>('/login', model);

    return data;
}

export {
    loginService
}