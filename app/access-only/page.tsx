"use client"
import AccessOnlyHeroSection from "@/containers/access-only-page/hero-section";
import React, { FC } from "react";

interface AccessOnlyProps {}

const AccessOnly: FC<AccessOnlyProps> = ({}) => {
  return (
    <main>
    <AccessOnlyHeroSection />
    </main>
  );
};

export default AccessOnly;