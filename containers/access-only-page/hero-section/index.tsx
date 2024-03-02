"use client"
import MultilineTypewriter from "@/components/MultilineTypewriter";
import { AccessOnlyState } from "@/constants";
import React, { FC, useEffect, useMemo, useState } from "react";
import {
  Button, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography,
} from "@material-tailwind/react";
import AccessForm from "@/components/Access";
import { motion } from "framer-motion";
import { METHODS } from "http";

export const revalidate = 0
export const dynamic = 'force-dynamic';

interface AccessOnlyHeroSectionProps {}

const list = {
  visible: {
    opacity: 1,
    transition: {
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

const AccessOnlyHeroSection: FC<AccessOnlyHeroSectionProps> = ({}) => {
  const [mode, setMode] = useState<AccessOnlyState>('');
  // const [secret, setSecret] = useState({user: '', code: ''});
  const [notes, setNotes] = useState([]);
  const intro = useMemo(
    () => (
      <MultilineTypewriter
        texts={[
          "This is an access only page",
          ". . .",
        ]}
        onFinish={() => setMode("unknown")}
      />
    ),
    []
  );

  const auth = async (name: string, code: string) => {
    const req = await fetch(
      `/year2024/api/auth`, {
        method: 'POST',
        body: JSON.stringify({name,code}),
        headers: {
          'content-type': 'application/json'
        }
      })
    const status = await req.json();
    console.log(status)
    if (status.authenticated) {
      const res = await getNotes();
      setNotes(res);
      return setMode('authenticated');
    } else {
      return setMode('denied');
    }
  }

  const getNotes = async() => {
    const res = await fetch('/year2024/api/notes');
    const data = await res.json();
    return JSON.parse(data?.NOTES);
  }

  return (
    <section className="bg-black color-offwhite w-full min-h-screen p-20 flex flex-col justify-center">
      {intro}
      {mode === "unknown"&& 
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
          To view access-content, click Proceed: &nbsp;&nbsp;
          <AccessForm handleSignin={auth}/>
        </motion.div>
      }
      {mode === "denied"&& 
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
          Apologies, you do not have access
        </motion.div>
      }
      {/* {mode === "unknown"&&  */}
      <div>
        <div className="w-[32rem] py-20">
          <Timeline>
            {notes.map((el, index) => (
              <TimelineItem>
              <motion.span
                key={index}
                style={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 1, 1],
                }}
                transition={{
                  times: [0, 0.3, 1],
                  duration: 0.2,
                  ease: "linear",
                }}
              >
                <TimelineConnector />
              </motion.span>
            
              <TimelineHeader className="h-3">
                <TimelineIcon className="p-2" color="white"/>
                <Typography variant="h6" className="leading-none text-offwhite" placeholder={undefined}>
                  {el['title']}
                </Typography>
                <Typography variant="small" className="leading-none text-gray" placeholder={undefined}>
                  {el['date']}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography variant="small" className="font-normal text-lightsilver" placeholder={undefined}>
                  {el['memo']}
                </Typography>
              </TimelineBody>
            </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
      {/* } */}
    </section>
  );
};

export default AccessOnlyHeroSection;