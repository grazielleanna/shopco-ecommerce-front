'use client'
import { CircleUserRound, KeyRound } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form/input";

export function AdminLoginForm() {

    const { register } = useForm({});

    return (
        <form className="flex flex-col gap-y-4 mt-8 max-w-2xl mx-auto">
            <Input
                type="email"
                placeholder="Email"
                {...register('email')}
                icon={<CircleUserRound />}
            />
            <Input
                type="password"
                placeholder="Password"
                {...register('password')}
                icon={<KeyRound />}
            />

            <Button className="w-full">
                Login
            </Button>
        </form>
    )
}