import React, { ReactNode } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: FieldError;
    icon?: ReactNode;
    control: Control<any, any>;
}

export function Input({ placeholder, icon, className, control, name, error, ...rest }: InputProps) {

    return (
        <Controller
            control={control}
            name={name ?? ''}
            render={({ field }) => (
                <>
                    <div className="flex w-full bg-[#F0F0F0] items-center h-14 gap-x-3 px-4 rounded-[62px]">
                        {icon && (
                            <div className="*:text-black/40 h-6 w-6">
                                {icon}
                            </div>
                        )}
                        <input
                            placeholder={placeholder}
                            className={twMerge('block bg-transparent placeholder:font-light w-full outline-none', className)}
                            {...rest}
                            {...field}
                        />
                    </div>

                    {error && (
                        <p className="text-red-700">{error.message}</p>
                    )}
                </>
            )}
        />
    )
}