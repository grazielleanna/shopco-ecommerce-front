import { z } from 'zod'

/**
 * @author: Grazielle Conceição
 * @since: 2024-05-27
 * @returns 
 */
function createAccountProfileValidation() {
    const schema = z.object({
        name: z.string().optional(),
        email: z.string().email('Enter a valid email.').optional(),
        phone: z.string().optional(),
        password: z.string({ required_error: 'The field is required to update profile', }).min(6, 'The password must be at least 6 characters long.')
    });

    return schema;
}

export {
    createAccountProfileValidation
}