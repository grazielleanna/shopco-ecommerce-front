import { z } from 'zod';

/**
 * @author: Grazielle Conceição
 * @since: 2024-05-27
 * @description Function that creates schema validation to register form
 * @returns 
 */
function createRegisterValidation() {
    const schema = z.object({
        name: z.string({ required_error: 'The field is required.' }),
        email: z.string({ required_error: 'The field is required.' }).email('Enter a valid email.'),
        phone: z.string({ required_error: 'The field is required.' }),
        password: z.string({ required_error: 'The field is required.', }).min(6, 'The password must be at least 6 characters long.')
    });

    return schema;
}

export {
    createRegisterValidation
}