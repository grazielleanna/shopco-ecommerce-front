'use client'

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { RegisterFormInputs } from "../../register/components/form-inputs";
import { createAccountProfileValidation } from "./data/validations";
import { LoadAndGetUser, updateUserService } from "./data";
import { queryClient } from "@/libs/react-query";
import { CreateUserModel } from "../../register/data/interfaces";
import { ThreeDots } from "react-loader-spinner";

type AccountProfileFormType = {
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    phone: string | undefined;
}

export function AccountProfileForm() {
    const { control, handleSubmit, formState, reset } = useForm<AccountProfileFormType>({
        resolver: zodResolver(createAccountProfileValidation()),
        mode: 'onChange'
    });
    const { errors } = formState;

    const { data } = LoadAndGetUser();

    const updateUser = useMutation({
        mutationFn: (model: Partial<CreateUserModel>) => updateUserService(data?.id ?? 0, model),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['user'] });
            toast.success('Profile updated successfully');
        },
        onError: () => {
            toast.error('Error to update profile. Try again.');
        }
    });

    useEffect(() => {
        if (data) {
            reset({ ...data });
        }
    }, [data]);

    async function onSubmit(values: AccountProfileFormType) {
        const model = {
            ...values,
            phone: values.phone?.replaceAll(/\D/g, '')
        };

        await updateUser.mutateAsync(model);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <RegisterFormInputs
                control={control}
                errors={errors}
            />

            <Button
                type="submit"
                className="w-full mt-4"
                disabled={!formState.isValid || formState.isSubmitting}
            >
                {formState.isSubmitting ?
                    <ThreeDots
                        visible={true}
                        height="30"
                        width="30"
                        color="#FFF"
                        radius="9"
                        ariaLabel="three-dots-loading"
                    />
                    : 'Update profile'}
            </Button>
        </form>
    )
}