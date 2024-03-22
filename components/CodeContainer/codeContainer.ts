import { TailwindColors } from "@/app/utilities/colorHelper";

export interface CodeContainerProp {
    codeSnippet: string;
    children?: React.ReactNode;
    color?: keyof TailwindColors | string;
    language?: string;
}

export class CodeContainerStyle {
    static container = 'bg-gray-900 rounded-lg mt-5 p-4 w-full sm:pt-4';
    static close = 'rounded-lg bg-red-500 w-3 h-3 mr-1';
    static minimize = 'rounded-lg bg-yellow-700 w-3 h-3 mr-1';
    static maximize = 'rounded-lg bg-green-500 w-3 h-3 mr-1';
    static copyButton = 'ml-auto rounded-md p-1.5 cursor-pointer [&_svg]:w-4 [&_svg]:h-4'
}