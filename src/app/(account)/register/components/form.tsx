'use client'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { createUserService } from "../data";
import { createRegisterValidation } from "../data/validations/form";
import { RegisterFormInputs } from "./form-inputs";

type RegisterFormType = {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export function RegisterForm() {
    const router = useRouter();

    const { control, handleSubmit, formState } = useForm<RegisterFormType>({
        resolver: zodResolver(createRegisterValidation()),
        mode: 'onChange'
    });
    const { errors } = formState;

    async function onSubmit(values: RegisterFormType) {
        try {
            const model = {
                ...values,
                is_active: true,
                is_super_admin: false,
                phone: values.phone?.replaceAll(/\D/g, '')
            };

            await createUserService(model);
            toast.success('Registration completed successfully. Log in.');
            router.push('/login');
        } catch (error) {
            toast.error('Error when registering. Try again.');
            console.log('error', error);
        }
    }

    return (
        <form
            className="flex flex-col gap-y-6 mt-8 max-w-5xl mx-auto"
            onSubmit={handleSubmit(onSubmit)}
        >
            <RegisterFormInputs
                control={control}
                errors={errors}
            />

            <Button
                type="submit"
                className="w-full"
                disabled={!formState.isValid || formState.isSubmitting}
            >
                Sign up
            </Button>
        </form>
    )
}