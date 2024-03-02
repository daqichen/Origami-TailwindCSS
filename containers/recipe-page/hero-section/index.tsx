"use client"
import MultilineTypewriter from "@/components/MultilineTypewriter";
import { ProgressState } from "@/constants";
import React, { FC, useMemo, useState } from "react";
import {
  Button,
} from "@material-tailwind/react";
import ScreenPrompter from "@/components/ScreenPrompter";
import { motion } from "framer-motion";

interface RecipeHeroSectionProps {}

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

const RecipeHeroSection: FC<RecipeHeroSectionProps> = ({}) => {
  const [mode, setMode] = useState<ProgressState>('intro');
  const intro = useMemo(
    () => (
      <MultilineTypewriter
        texts={[
          "Recipes I loved from 2024",
          ". . ."
        ]}
        onFinish={() => setMode("idle")}
      />
    ),
    []
  );

  return (
    <section className="bg-black color-offwhite w-screen min-h-screen p-20 flex flex-col justify-center">
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
          To see the collection so far, click Proceed: &nbsp;&nbsp;
          <Button onClick={() => setMode("proceed")} placeholder={undefined}>Proceed</Button>
        </motion.div>
      }
      {mode === "proceed"&& 
      <div className="py-20">
        <ScreenPrompter
            key={1}
            text={"No.1"}
            onFinishDelay={100}
            stepTimeSecond={0.3}
          />
          <Button onClick={() => console.log} placeholder={undefined}>Lamb Curry</Button>
        
      </div>
      }
    </section>
  );
};

export default RecipeHeroSection;