'use client'

import { Input } from "@/components/ui/form/input";
import { InputMask } from "@/components/ui/form/input-mask";
import { CircleUserRound, KeyRound, Mail, Phone } from "lucide-react";
import { Control, FieldError } from "react-hook-form";

interface RegisterFormInputsProps {
    control: Control<any, any>;
    errors?: FieldError | any;
}

export function RegisterFormInputs({ control, errors }: RegisterFormInputsProps) {
    return (
        <div className="grid grid-cols-2 gap-6">
            <div>
                <Input
                    type="text"
                    placeholder="Name"
                    icon={<CircleUserRound />}
                    name="name"
                    control={control}
                    error={errors?.name}
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
    )
}