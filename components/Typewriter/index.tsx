import { motion } from "framer-motion";
import { useEffect, useMemo, useState, FC } from "react";

interface TypewriterProps {
  text: string;
  onFinish?: () => void;
  stepTimeSecond?: number;
  onFinishDelay?: number; // in miliseconds
};

const Typewriter:FC<TypewriterProps> = ({
  text,
  onFinish,
  stepTimeSecond = 0.1,
  onFinishDelay = 100,
}) => {
    const [tracker, setTracker] = useState(0);
    const textArr = text.split("");
    const duration = text.length * stepTimeSecond;
    const stepSize = 1 / text.length;

    useEffect(() => {
        if (onFinish && tracker === 0) {
            setTracker(1);
            setTimeout(() => onFinish(), duration * 1000 + onFinishDelay);
        }
    }, [duration, onFinish, onFinishDelay]);

  return useMemo(
    () => (
      <motion.p
        style={{
          opacity: 0,
        }}
        animate={{ opacity: [0, 1, 1] }}
        transition={{
          duration: stepTimeSecond,
          times: [0, 1, 1],
        }}
      >
        {textArr.map((letter, index) => {
          return (
            <motion.span
              key={index}
              style={{
                minWidth: "5px",
                display: "inline-flex",
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 1],
              }}
              transition={{
                times: [index * stepSize, index * stepSize + stepSize, 1],
                duration,
                ease: "linear",
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.p>
    ),
    [duration, stepSize, stepTimeSecond, textArr]
  );
}

export default Typewriter;