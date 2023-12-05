import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    // Optional
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}