import { motion } from "framer-motion";
import { useEffect, useMemo, useState, FC } from "react";

interface ScreenPrompterProps {
  text: string;
  onFinish?: () => void;
  stepTimeSecond?: number;
  onFinishDelay?: number; // in miliseconds
};

const ScreenPrompter: FC<ScreenPrompterProps> = ({
  text,
  onFinish,
  stepTimeSecond = 0.1,
  onFinishDelay = 100,
}) => {
    const [tracker, setTracker] = useState(0);
    const textArr = text.split(" ");
    const duration = textArr.length * stepTimeSecond;
    const stepSize = 1 / textArr.length;

    useEffect(() => {
        if (onFinish && tracker === 0) {
            setTracker(1);
            setTimeout(() => onFinish(), duration * 1000 + onFinishDelay);
        }
    }, [duration, onFinish, onFinishDelay]);

  return useMemo(
    () => (
      <motion.div
        style={{
          opacity: 0,
          width: "max-content"
        }}
        animate={{ opacity: [0, 1, 1] }}
        transition={{
          duration: stepTimeSecond,
          times: [0, 1, 1],
        }}
      >
        {textArr.map((word, index) => {
          return (
            <motion.div
              key={index}
              style={{
                minWidth: "5px",
                textAlign: "center",
                marginTop: "-3px",
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
              {word}&nbsp;
            </motion.div>
          );
        })}
      </motion.div>
    ),
    [duration, stepSize, stepTimeSecond, textArr]
  );
}

export default ScreenPrompter;