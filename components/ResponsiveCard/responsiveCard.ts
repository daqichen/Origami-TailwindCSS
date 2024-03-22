import { TailwindColors } from "@/app/utilities/colorHelper";

// console.log( keyof Explode<DefaultColors>)
export interface ResponsiveCardProp {
    className?: string;
    children?:  React.ReactNode;
    title: any;
    description: any;
    footer?: any;
    containerShade?: keyof TailwindColors | string;
    titleColor?: keyof TailwindColors | string;
    descriptionColor?: keyof TailwindColors | string;
    footerColor?: keyof TailwindColors | string;
  }

export class ResponsiveCardStyle {
    static container = 'rounded-lg mt-5 p-4 w-full pt-8 sm:pt-4';

    static title = 'text-xl font-bold my-4';

    static description_mobile = 'font-light text-sm truncate w-full text-ellipsis block hover:whitespace-pre-wrap sm:hidden';

    static description = 'font-light text-sm whitespace-pre-line hidden sm:block';

    static footer = 'font-light text-xs mt-4';
}