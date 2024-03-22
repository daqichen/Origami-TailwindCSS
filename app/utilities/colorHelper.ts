import { DefaultColors } from "tailwindcss/types/generated/colors";
type Entry = { key: string, value: any }
type Explode<T> = 
    T extends object? {
        [K in keyof T]-?: K extends string ? 
        Explode<T[K]> extends infer E ? E extends Entry ? {
            key: `${K}${E['key'] extends "" ? "":"-"}${E['key']}`,
            value: E['value']
        } : never : never : never
    }[keyof T] 
    : {key: '', value: T};
type Collapse<T extends Entry> =
    {[E in Extract<T,any> as E['key']]: E['value']};
type Flatten<T> = Collapse<Explode<T>>;

export type TailwindColors = Flatten<DefaultColors>;