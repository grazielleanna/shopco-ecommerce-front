import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends ComponentProps<'section'> { }

export function Section({ children, className, ...rest }: SectionProps) {
    return (
        <section className={twMerge('px-4 rounded w-full', className)} {...rest}>
            {children}
        </section>
    )
}