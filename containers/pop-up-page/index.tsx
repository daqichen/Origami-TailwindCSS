import { FC } from "react";
import { PopUpPageStyle } from "./popUpPage";
import { ExampleCardData } from "@/components/ResponsiveCard/mockData";
import ResponsiveCard from "@/components/ResponsiveCard";
import CodeContainer from "@/components/CodeContainer";

export interface IPopUpHeroSectionProps {}

const PopUpHeroSection:FC<IPopUpHeroSectionProps> = (props) => {
    return (
        <section className={PopUpPageStyle.section}>
            <div className={PopUpPageStyle.container}>
                <h1 className={PopUpPageStyle.header}>
                    A Guide to <br/> <span className={PopUpPageStyle.code}>Pop-up</span> Components
                </h1>
                <p>
                    Pop-up origami, technically a form of “kirigami”, involves cutting the paper and folding to allow elements to “pop up”, while retaining tha achieved effect by folding up the paper, hence the word “card”. These elements below are responsive to the page layout using pre-defined media query constraints Tailwind CSS offers out-of-the-box: <br/><br/>

                    1.&nbsp;<span className={PopUpPageStyle.code}>Responsive Card</span>
                </p>
                <CodeContainer 
                codeSnippet={`<ResponsiveCard
    title={data.title}
    description={data.description}
    footer={data.footer}
    footerColor={'molecule'}
    containerShade={'organism'}
/>`}
                color='molecule'
                />
                {ExampleCardData.map((data) => (
                    // Responsive Card Component
                    <ResponsiveCard
                        title={data.title}
                        description={data.description}
                        footer={data.footer}
                        footerColor={'molecule'}
                        containerShade={'organism'}
                    />
                ))}
            </div>
        </section>
    )
}

export default PopUpHeroSection;