'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form/input";
import { InputMask } from "@/components/ui/form/input-mask";
import { CircleUserRound, KeyRound, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { createUserService } from "../data";
import { toast } from "react-toastify";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { createRegisterValidation } from "../data/validations/form";

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
                is_super_admin: false
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
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <Input
                        type="text"
                        placeholder="Name"
                        icon={<CircleUserRound />}
                        name="name"
                        control={control}
                        error={errors.name}
                    />
                </div>
                <div>
                    <Input
                        type="email"
                        placeholder="Email"
                        icon={<Mail />}
                        name="email"
                        control={control}
                        error={errors.email}
                    />
                </div>
                <div>
                    <InputMask
                        control={control}
                        name="phone"
                        mask="+55 (__) _____-____"
                        placeholder="Phone"
                        icon={<Phone />}
                        replacement={{ _: /\d/ }}
                        showMask
                        error={errors.phone}
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder="Password"
                        icon={<KeyRound />}
                        name="password"
                        control={control}
                        minLength={6}
                        error={errors.password}
                    />
                </div>
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={!formState.isValid || !formState.isSubmitting}
            >
                Sign up
            </Button>
        </form>
    )
}