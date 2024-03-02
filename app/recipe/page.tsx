"use client"
import RecipeHeroSection from "@/containers/recipe-page/hero-section";
import React, { FC, useRef } from "react";

interface ProgressProps {}

const Progress: FC<ProgressProps> = ({}) => {
  return (
    <main>
    <RecipeHeroSection />
    </main>
  );
};

export default Progress;