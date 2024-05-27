import { z } from 'zod';

/**
 * @author: Grazielle Conceição
 * @since: 2024-05-27
 * @description Function that creates schema validation to login form
 * @returns 
 */
function createLoginValidation() {
    const schema = z.object({
        email: z.string({ required_error: 'The field is required.' }).email('Enter a valid email.'),
        password: z.string({ required_error: 'The field is required.', }).min(6, 'The password must be at least 6 characters long.')
    });

    return schema;
}

export {
    createLoginValidation
}