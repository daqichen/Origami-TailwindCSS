'use client'
import { FC } from "react";
import { InputProp, InputStyle } from "./input";

const Input:FC<InputProp> = (props) => {
    return (
        <input className={`${InputStyle.input} ${props.size && `text-${props.size}`} ${props.className}`}
        onChange={props.onChange} placeholder={props.placeholder ?? 'Please enter here'}/>
    )
}

export default Input;