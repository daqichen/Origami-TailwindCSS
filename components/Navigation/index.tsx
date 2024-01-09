"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";

interface NavigationProps {
  value: string;
  href: string;
  id: number;
}

const Navigation: FC<NavigationProps> = ({ value, href }) => {
  const route: string = usePathname();
  return (
    <div className="hover:animate-pulse h-full w-max pb-2 border-b-4 border-offwhite relative">
      <Link href={href} className="text-white font-medium">
        {value}
      </Link>
      <div
        className="bg-primaryColor absolute w-full h-1 top-[62px]"
        style={href === route ? { display: "flex" } : { display: "none" }}
      />
    </div>
  );
};

export default Navigation;