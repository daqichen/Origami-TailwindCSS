"use client"
import ProgressHeroSection from "@/containers/progress-page/hero-section";
import React, { FC, useRef } from "react";

interface ProgressProps {}

const Progress: FC<ProgressProps> = ({}) => {
  return (
    <main>
    <ProgressHeroSection />
    </main>
  );
};

export default Progress;