"use client"
import MultilineTypewriter from "@/components/MultilineTypewriter";
import { ProgressState } from "@/constants";
import React, { FC, useMemo, useState } from "react";
import {
  Button,
} from "@material-tailwind/react";
import ScreenPrompter from "@/components/ScreenPrompter";
import { motion } from "framer-motion";

interface ReflectHeroSectionProps {}

const list = {
  visible: {
    opacity: 1,
    transition: {
      // delayChildren: 1.5,
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -10 },
};

const ReflectHeroSection: FC<ReflectHeroSectionProps> = ({}) => {
  const [mode, setMode] = useState<ProgressState>('intro');
  const intro = useMemo(
    () => (
      <MultilineTypewriter
        texts={[
          "This is a 2024 resolution",
          "one by a software engineer in the elaborate form of a webpage",
          ". . ."
        ]}
        onFinish={() => setMode("idle")}
      />
    ),
    []
  );

  return (
    <section className="bg-black color-offwhite w-full min-h-screen p-20 flex flex-col justify-center">
      {intro}
      {mode === "idle"&& 
        <motion.div 
          className="py-10 inline"
          variants={item}
          initial="hidden"
          animate="visible"
          whileHover={{
            marginLeft: '5px',
            transition: { ease: 'easeOut' },
          }}
        >
          To see the progress so far, click Proceed: &nbsp;&nbsp;
          <Button onClick={() => setMode("proceed")} placeholder={undefined}>Proceed</Button>
        </motion.div>
      }
      {mode === "proceed"&& 
      <div className="py-20">
        {/* TODO: motion advanced usage */}
        <ScreenPrompter
            key={1}
            text={"This is a screen prompter"}
            onFinishDelay={100}
            stepTimeSecond={0.3}
          />        
      </div>
      }
    </section>
  );
};

export default ReflectHeroSection;