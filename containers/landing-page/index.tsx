import React, { FC } from "react";
import { LandingPageStyle } from "./landingPage";
import CodeContainer from "@/components/CodeContainer";
import { TailwindColors } from "@/app/utilities/colorHelper";

interface LandingHeroSectionProps { }


const LandingHeroSection: FC<LandingHeroSectionProps> = ({ }) => {
  return (
    <section className={LandingPageStyle.section}>
      <div className={LandingPageStyle.container}>
        <div>
          <h1 className={LandingPageStyle.header}>
            A Guide to <br/> <span className={LandingPageStyle.code}>Origami-TailwindCSS</span>
          </h1>
          <div>
            <span className={LandingPageStyle.code}>origami-tailwindcss</span> is a template <a href='https://nextjs.org/docs/' className="text-molecule">NextJS</a> project to learn about the ancient art of origami, the project leverages <a href='https://tailwindcss.com/' className="text-molecule">tailwind CSS</a> for styling along with <a href='https://www.typescriptlang.org/' className="text-molecule">TypeScript</a> to make it more readable and easier to maintain.
            <br/><br/>
            Tailwind CSS is the embodiment of "utility CSS", it has benefits of smaller build and abstracting CSS attributes to classname one can easily chain together directly in the HTML, it sets out to change the very way developers approach frontend to replace traditional "semantic CSS".
            <br/><br/>
            However, is there a downside to a total shift to "utility CSS"? Aleksandr Hovhannisyan did a <a href="https://www.aleksandrhovhannisyan.com/blog/why-i-dont-like-tailwind-css/" className="text-molecule">deep dive</a> into reasons why he's not quite convinced. This template project is an attempt to remedy the "readability" by marrying it with <a href="https://www.typescriptlang.org/" className="text-molecule">static typing</a>. 
            <br/><br/>
            <b>TLDR:</b>  Using tailwindCSS, sometimes it's difficult to understand what a set of CSS attributes represent, especially as project grows. <span className={LandingPageStyle.code}>origami-tailwindcss</span> not only teaches you about origami, but also serves as a starting template for anyone hoping to give NextJS and tailwindCSS a try, with Typescript to allow more readability and code reusability.
            <br/> <br/>
            To read more about the <a href='/best-practices' className="text-molecule">best practices</a> this template enforces.
            {/* One of the things you can do is import a component from <span className={LandingPageStyle.code}>origami-tailwindcss</span> and when passing the `color` prop, the list of Tailwind CSS colors are prompted to you as it is typed with `keyof TailwindColors` behind the scene, while string input is also accepted for more custom color values.
        <CodeContainer 
          codeSnippet={`import { TailwindColors } from "@/app/utilities/colorHelper";
// reference keyof TailwindColors to access all the tailwind-encoded colors;
color?: keyof TailwindColors | string;
`}
        /> */}
            <br/><br/>
            <b>NOTICE:</b> 
            <br/>
            The template is currently undergoing initial development, therefore is not yet ready-for-use, if there are any suggestions/questions, please feel free to <a className={LandingPageStyle.distro} href='mailto:daqichen@alumni.unc.edu'>reach out</a>!
          </div>
        </div>
        <div>
          <br/><br/>
          <b className={LandingPageStyle.header}>3 Types of Origami:</b> 
          <br/><br/>
          <a href='/tessellation'><span className={LandingPageStyle.code}>Tessellation</span></a>&nbsp;- repeating molecules, think of a pattern.
          <br/><br/>
          <a href='/pop-up'><span className={LandingPageStyle.code}>Pop-up</span></a>&nbsp;- a special paper cut-out model that become 3D when folded.
          <br/><br/>
          <a href='/kinetic'><span className={LandingPageStyle.code}>Kinetic Origami</span></a>&nbsp;- dynamic models that when moved in a certain way, mutate in shape.
        </div>
      </div>

    </section>
  );
};

export default LandingHeroSection;