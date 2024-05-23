import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<'button'> {
    children: ReactNode;
    outlined?: boolean;
}

export function Button({ children, outlined, className, ...rest }: ButtonProps) {

    const outlinedClass = 'bg-white text-black border border-black/10 hover:bg-black/15 ease-in duration-300'

    return (
        <button
            className={twMerge('h-[52px] w-52 rounded-[62px]', outlined ? outlinedClass : 'bg-black text-white', className)}
            {...rest}
        >
            {children}
        </button>
    )
}