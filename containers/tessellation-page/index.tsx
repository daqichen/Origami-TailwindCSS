import CodeContainer from "@/components/CodeContainer";
import { FC } from "react";
import { TessellationPageStyle } from "./tessellationPage";

export interface ITessellationHeroSectionProps {}

const TessellationHeroSection:FC<ITessellationHeroSectionProps> = (props) => {
    return (
        <section className={TessellationPageStyle.section}>
            <div className={TessellationPageStyle.container}>
            <h1 className={TessellationPageStyle.header}>
                A Guide to <br/> <span className={TessellationPageStyle.code}>Tessellation</span> Components
            </h1>
            <p>
                "Tessellation Origami" is a folding genre that creates complex, intricate, repeating patterns with a single sheet of paper. The individual part that is repeated to form the pattern is called a "molecule", which is how these elements below can be considered in the overall UI. Here are some generally highly reused components: <br/><br/>

                1.&nbsp;<span className={TessellationPageStyle.code}>CodeContainer</span>
            </p>
            {/* <CodeContainer 
                codeSnippet={`npm i origami-tailwindcss`}
                color='molecule'
                /> */}
            <CodeContainer 
                codeSnippet={`<CodeContainer 
    codeSnippet={"//code snippet goes here"}
    color='molecule'
/>`}
                />
            <p>
                <br/><br/>   
                2.&nbsp;<span className={TessellationPageStyle.code}>Button</span>
            </p>
            <CodeContainer 
                codeSnippet={`Under Development`}
                />
            <p>
                <br/><br/>   
                3.&nbsp;<span className={TessellationPageStyle.code}>Input</span>
            </p>
            <CodeContainer 
                codeSnippet={`Under Development`}
                />
            <p>
                <br/><br/>   
                4.&nbsp;<span className={TessellationPageStyle.code}>More lego pieces</span>
            </p>
            </div>
        </section>
    )
}

export default TessellationHeroSection;