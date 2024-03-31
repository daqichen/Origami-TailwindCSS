import { TailwindColors } from "@/app/utilities/colorHelper";

export interface InputProp {
    className?: string;
    placeholder?: string;
    value?: string;
    color?: keyof TailwindColors | string;
    size?: 'sm' | 'md' | 'lg';
    onChange?: React.FormEventHandler<HTMLInputElement>;
}

export class InputStyle {
    static input = `rounded-sm px-[16px] py-[8px] m-2 text-md text-black border-4 hover:border-molecule/60`;
}