import Button from "@/components/Button";
import Input from "@/components/Input";

export const TessellationDemos = [
    {
        id: 'code_container',
        name: 'CodeContainer',
        demo: null,
        code: `<CodeContainer 
    codeSnippet={"//code snippet goes here"}
    color='molecule'
/>`
    },
    {
        id: 'button',
        name: 'Button',
        demo: 
        <div>
            Three Variants: &nbsp;
            <Button title="Title" size="lg"/> |
            <Button title="Default"/> |
            <Button title="Small" size="sm"/> 
        </div>,
        code: `<Button title="Title" size="lg"/> 
<Button title="Default"/>
<Button title="Small" size="sm"/>`
    },
    {
        id: 'input',
        name: 'Input',
        demo: <div>
            <Input placeholder="This is a placeholder"/>
            <Button title="Submit" onClick={() => alert('Clicked')}/> 
        </div>,
        code: `<Input placeholder="This is a placeholder"/>`
    },
    {
        id: 'more_lego',
        name: 'More lego pieces to come',
        demo: null,
        code: `Under Development`
    },

]