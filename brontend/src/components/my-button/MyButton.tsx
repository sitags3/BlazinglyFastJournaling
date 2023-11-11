import React, { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
    variants: {
        intent: {
            primary: [
            ],
            secondary: [
            ],
        },
        size: {
            small: [],
            medium: [],
            large: ['text-xl', 'text-black', 'px-[104px]', 'py-4'],
        },
        border: {
            primary: [
                'border',
                'border-1',
                'border-black',
            ]
        }
    },

    compoundVariants: [{ intent: "primary", size: "medium" }],
    defaultVariants: {
        intent: "primary",
        size: "medium",
        border: "primary",
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> { }

const MyButton: FC<ButtonProps> = ({
    className,
    intent,
    size,
    ...props
}) => {
    return (
        <button className={button({ intent, size, className })} {...props} />
    )
}

export default MyButton;