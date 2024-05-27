import { api } from "@/services/api";
import { CreateUserModel } from "./interfaces";

/**
 * @author: Grazielle Conceição
 * @since: 2024-05-27
 * @param model 
 * @returns 
 */
async function createUserService(model: CreateUserModel) {
    return await api.post('/users', model);
}

export {
    createUserService
}