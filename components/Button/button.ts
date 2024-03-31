import { TailwindColors } from "@/app/utilities/colorHelper";

export interface ButtonProp {
    className?: string;
    title: string;
    children?: React.ReactNode;
    color?: keyof TailwindColors | string;
    size?: 'sm' | 'md' | 'lg';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export class ButtonStyle {
    static button = `rounded-md px-[16px] py-[8px] m-2 text-md cursor-pointer bg-molecule/60 hover:bg-molecule/15`;
}