interface LoginModel {
    email: string;
    password: string;
}

type LoginResponseService = {
    type: string;
    name: string | null;
    token: string;
    abilities: string[];
    lastUsedAt: string | null;
    expiresAt: string;
}

export type {
    LoginModel,
    LoginResponseService
}