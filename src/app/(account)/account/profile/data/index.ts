import { api } from "@/services/api";
import { User } from "./interfaces";
import { CreateUserModel } from "@/app/(account)/register/data/interfaces";
import { useQuery } from "@tanstack/react-query";

/**
 * @author: Grazielle Conceição
 * @since: 2024-05-27
 * @description Function that gets user by id in the api
 * @param userId 
 * @returns 
 */
async function getUserById(userId: number) {
    const { data: response } = await api.get<User>(`/users/${userId}`);

    return response;
}

/**
 * @author: Grazielle Conceição
 * @since: 2024-05-27
 * @description Function that gets user by token in the API
 * @param token 
 * @returns 
 */
async function getUserByToken() {
    const { data: response } = await api.get<User>(`/user-by-token`);

    return response;
}

/**
 * @author: Grazielle Conceição
 * @since: 2024-05-27
 * @description Function that gets user by id in the api
 * @param userId 
 * @returns 
 */
async function updateUserService(userId: number, model: Partial<CreateUserModel>) {
    const { data: response } = await api.put<User>(`/users/${userId}`, model);

    return response;
}

/**
 * @author: Grazielle Conceição
 * @since: 2024-05-27
 * @returns 
 */
function LoadAndGetUser() {
    return useQuery<User>({
        queryKey: ['user', 'by-token'],
        queryFn: getUserByToken
    })
}

export {
    updateUserService,
    LoadAndGetUser
}