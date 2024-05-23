import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps extends ComponentProps<'h3'> { }

export function Title({ children, className, ...rest }: TitleProps) {
    return (
        <h3
            className={twMerge('font-extrabold text-5xl', className)}
            {...rest}
        >
            {children}
        </h3>
    )
}