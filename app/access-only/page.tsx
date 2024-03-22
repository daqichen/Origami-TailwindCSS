"use client"
import Menu from "@/components/Menu";
import AccessOnlyHeroSection from "@/containers/access-only-page/hero-section";
import React, { FC } from "react";

interface AccessOnlyProps {}

const AccessOnly: FC<AccessOnlyProps> = ({}) => {
  return (
    <main className="min-h-screen p-5 lg:p-24 md:p-12 sm:p-5">
    <Menu />
    <AccessOnlyHeroSection />
    </main>
  );
};

export default AccessOnly;