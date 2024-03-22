import React, { FC } from "react";
import { ExampleCardData } from "@/components/ResponsiveCard/mockData";
import ResponsiveCard from "@/components/ResponsiveCard";
import { LandingPageStyle } from "./landingPage";
import CodeContainer from "@/components/CodeContainer";

interface LandingHeroSectionProps { }


const LandingHeroSection: FC<LandingHeroSectionProps> = ({ }) => {
  return (
    <section className={LandingPageStyle.section}>
      <div className={LandingPageStyle.container}>
        <div>
          <h1 className={LandingPageStyle.header}>
            A Guide to <br/> <span className={LandingPageStyle.code}>Origami-TailwindCSS</span>
          </h1>
          <p>
            <span className={LandingPageStyle.code}>origami-tailwindcss</span> is a minimal UI component library that leverages the capabilities of <a href='https://tailwindcss.com/' className="text-molecule">tailwind CSS</a>. It offers a minimal set of components and exposes the tailwind CSS style classes behind each for developers to modify.
            <br/><br/>
            Tailwind CSS is the embodiment of "utility CSS", it has benefits of smaller build and abstracting CSS attributes to classname one can easily chain together directly in the HTML, it sets out to change the very way developers approach frontend to replace traditional "semantic CSS".
            <br/><br/>
            However, is there a downside to a total shift to "utility CSS"? Aleksandr Hovhannisyan did a <a href="https://www.aleksandrhovhannisyan.com/blog/why-i-dont-like-tailwind-css/" className="text-molecule">deep dive</a> into reasons why he's not quite convinced. In trying out tailwind CSS in my personal projects, I will attest to the compromise on "readability" that was stressed in that article. 
            <br/><br/>
            Specifically, it could be difficult to understand what a set of CSS attributes represent in the overall page, which "semantic CSS" is exceptional at doing, making it easier to reuse and understand across iterations. <span className={LandingPageStyle.code}>origami-tailwindcss</span> hopes to create an experience that joins the best of both worlds (semantic & utility CSS).
            <br/><br/>
            <b>TLDR:</b> 
            <br/>
            <span className={LandingPageStyle.code}>origami-tailwindcss</span> joins Tailwind CSS with Typescript to allow more readability and code reusability. It also offers a minimal set of components.
            <br/><br/>
            Documentation for the components are located at:
            <br/><br/>
            <a href='/tessellation'><span className={LandingPageStyle.code}>/Tessellation</span></a>&nbsp;- building blocks of the page or a larger component, such as buttons and input boxes.
            <br/><br/>
            <a href='/pop-up'><span className={LandingPageStyle.code}>/Pop-up</span></a>&nbsp;- dynamic components or layout that responds to screen sizes.
            <br/><br/>
            <b>NOTICE:</b> 
            <br/>
            The library is currently undergoing initial development, therefore is not yet available, the pending work needed is drafted below and if there are any suggestions/questions, please feel free to <a className={LandingPageStyle.distro} href='mailto:daqichen@alumni.unc.edu'>reach out</a>!
          </p>
        </div>
        <CodeContainer 
          codeSnippet={`TODOs:
[ ] Creating initial components offerings (Tessellation 1 out of 10 done, Pop-up 1 out of 5 done)
[ ] Publish to NPM Registry
[ ] Testing integration`}
          color='molecule'
        />
        {/* {ExampleCardData.map((data) => (
          // Responsive Card Component
          <ResponsiveCard
            title={data.title}
            description={data.description}
            footer={data.footer}
            footerColor={'molecule'}
            containerShade={'organism'}
          />
        ))} */}
        {/*  */}
      </div>

    </section>
  );
};

export default LandingHeroSection;