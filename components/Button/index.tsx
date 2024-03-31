'use client'
import { FC } from "react";
import { ButtonProp, ButtonStyle } from "./button";

const Button:FC<ButtonProp> = (props) => {
    if (props.children && props.title) {
        throw Error('Please only supply either children or title prop.')
    }
    return (
        <button className={`${ButtonStyle.button} ${props.color && `bg-${props.color} hover:bg-${props.color}/15`} ${props.size && `text-${props.size}`} ${props.className}`}
        onClick={props.onClick}>
            {props.children ?? props.title}
        </button>
    )
}

export default Button;