type CreateUserModel = {
    name: string;
    email: string;
    password: string;
    phone: string;
    is_active: boolean;
    is_super_admin: boolean;
}

export type {
    CreateUserModel
}