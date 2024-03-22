import { TailwindColors } from "@/app/utilities/colorHelper";

export interface FloatingMenuProp {
    className?: string;
    children?:  React.ReactNode;
    containerShade?: keyof TailwindColors | string;
}
export interface FloatingMenuItemProp {
    className?: string;
    id: string;
    children:  React.ReactNode;
    selected?: boolean;
    onSelect?: any;
    href?: string;
    selectedItemBorderColor?: keyof TailwindColors | string;
}

export class FloatingMenuStyle {
    static container = 'ml-auto sticky w-fit top-2 right-2 backdrop-blur-md p-2 rounded-md';
    
    static item = 'flex w-fit cursor-pointer mt-2 pr-4 ml-auto';

    static selectedItem = FloatingMenuStyle.item + ` border-r-2`
    
}