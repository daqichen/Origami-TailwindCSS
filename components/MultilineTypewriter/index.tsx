import { useState, FC } from "react";
import Typewriter from "@/components/Typewriter";

interface MultilineTypewriterProps {
  texts: Array<string>;
  onFinish?: () => void;
};

const MultilineTypewriter:FC<MultilineTypewriterProps> = ({ texts, onFinish }) => {
  const [currentLine, setCurrentLine] = useState<number>(0);

  return (
    <div className="flex flex-col">
      {texts.map((text, index) => {
        if (index <= currentLine) {
          if (index < texts.length - 1) {
            return (
              <Typewriter
                key={index}
                text={text}
                onFinish={() => setCurrentLine(currentLine + 1)}
                onFinishDelay={100}
                stepTimeSecond={0.05}
              />
            );
          } else {
            return (
              <Typewriter
                key={index}
                text={text}
                onFinish={onFinish}
                stepTimeSecond={0.05}
              />
            );
          }
        }
      })}
    </div>
  );
}

export default MultilineTypewriter;