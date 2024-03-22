import { FC } from "react";
import { FloatingMenuItemProp, FloatingMenuProp, FloatingMenuStyle } from "./floatingMenu";


const FloatingMenu:FC<FloatingMenuProp> = (props) => {
    return (
        <div className={`${FloatingMenuStyle.container} bg-${props.containerShade ?? 'none'} ${props.className}`}>
            {props.children}
        </div>
    )
}

export const FloatingMenuItem:FC<FloatingMenuItemProp> = (props) => {
    return (
        props.href ? 
        <a key={props.id} href={props.href}>
            <div key={props.id} className={`${props.selected ? `${FloatingMenuStyle.selectedItem} border-${props.selectedItemBorderColor ?? 'molecule'}` : FloatingMenuStyle.item} ${props.className}`} onClick={props.onSelect}>
                {props.children}
            </div>
        </a>
        :
        <div key={props.id} className={`${props.selected ? `${FloatingMenuStyle.selectedItem} border-${props.selectedItemBorderColor ?? 'molecule'}` : FloatingMenuStyle.item} ${props.className}`} onClick={props.onSelect}>
          {props.children}
        </div>
    )
}

export default FloatingMenu;