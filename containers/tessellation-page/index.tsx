'use client'
import CodeContainer from "@/components/CodeContainer";
import { FC } from "react";
import { TessellationPageStyle } from "./tessellationPage";
import { TessellationDemos } from "./TessellationDemos";

export interface ITessellationHeroSectionProps {}

const TessellationHeroSection:FC<ITessellationHeroSectionProps> = (props) => {
    return (
        <section className={TessellationPageStyle.section}>
            <div className={TessellationPageStyle.container}>
            <h1 className={TessellationPageStyle.header}>
                A Guide to <br/> <span className={TessellationPageStyle.code}>Tessellation</span> Components
            </h1>
            <p>
                "Tessellation Origami" is a folding genre that creates complex, intricate, repeating patterns with a single sheet of paper. The individual part that is repeated to form the pattern is called a "molecule", which is how these elements below can be considered in the overall UI. Here are some generally highly reused components:
            </p>

            {TessellationDemos.map((demo, ind) => 
                <div key={demo.id} className="my-4">
                    <p>
                        {ind+1}. &nbsp;<span className={TessellationPageStyle.code}>{demo.name}</span>
                    </p>
                    {demo.demo}
                    {demo.code && <CodeContainer codeSnippet={demo.code} />}
                </div>
            )}
            </div>
        </section>
    )
}

export default TessellationHeroSection;