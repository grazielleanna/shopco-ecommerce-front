'use client'
import { CircleUserRound, KeyRound } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLoginValidation } from "../data/validations";
import { toast } from "react-toastify";

type LoginFormType = {
    email: string;
    password: string;
}

export function LoginForm() {
    const { control, handleSubmit, formState } = useForm<LoginFormType>({
        resolver: zodResolver(createLoginValidation())
    });
    const { errors } = formState;

    function onSubmit(values: LoginFormType) {
        try {

        } catch (error) {
            toast.error('Error when loging. Try again.');
            console.log('error', error);
        }
    }

    return (
        <form
            className="flex flex-col gap-y-4 mt-8 max-w-2xl mx-auto"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                type="email"
                placeholder="Email"
                icon={<CircleUserRound />}
                name="email"
                control={control}
                error={errors.email}
            />
            <Input
                type="password"
                placeholder="Password"
                icon={<KeyRound />}
                name="password"
                control={control}
                error={errors.password}
            />

            <Button
                type="submit"
                className="w-full"
                disabled={!formState.isValid || formState.isSubmitting}
            >
                Sign in
            </Button>

            <Link
                className="text-black/60 text-center mt-3"
                href="/register"
            >
                Don't have account yet? <span className="underline underline-offset-2">Register</span>
            </Link>
        </form>
    )
}