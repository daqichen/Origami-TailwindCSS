'use client'
import { FC } from "react";
import { ICON, IconLibrary } from "../icons";
import { CodeContainerProp, CodeContainerStyle } from "./codeContainer";

const CodeContainer:FC<CodeContainerProp> = (props) => {
    return (
        <div className={CodeContainerStyle.container}>
          {/* Controls (not active)*/}
          <div className="flex pb-3"> 
            <span className={CodeContainerStyle.close}/>
            <span className={CodeContainerStyle.minimize}/>
            <span className={CodeContainerStyle.maximize}/>
            {/* TODO: replace the following with a button component */}
            <span className={`${CodeContainerStyle.copyButton} bg-${props.color ?? 'white'}/15 hover:bg-${props.color ?? 'white'}/30 [&_svg]:fill-${props.color ?? 'white'}`} onClick={() => navigator.clipboard.writeText(props.codeSnippet)}>{IconLibrary(ICON.CLIPBOARD)}</span>
          </div>
          <pre>
            <code className="font-[monospace] whitespace-pre-wrap">
              {props.codeSnippet}
            </code>
          </pre>
          {props.children}
        </div>
    )
}

export default CodeContainer;