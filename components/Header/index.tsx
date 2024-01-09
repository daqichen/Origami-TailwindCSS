import React, { FC } from "react";
import Link from "next/link";
import { NavigationIndex } from "../../constants";
import Navigation from "../Navigation";
import { Logo } from "../Icons/Logo";
import { motion } from "framer-motion";

interface HeaderProps {
//   user: User | null;
}

const Header: FC<HeaderProps> = async () => {
  return (
    <header className="w-full flex justify-center py-4 md:py-8 bg-primaryColor shadow hover:shadow-lg relative z-100">
      <div className="w-full max-w-screen-xl mx-5 md:mx-10 flex items-center justify-between">
        <Link href={"/"}>
            <div className="flex gap-3 items-center w-full">
                <Logo/>
                <h1 className="text-white text-md font-bold">Documenting 2024</h1>
            </div>
        </Link>
        <nav className=" gap-14 hidden lg:flex">
          {NavigationIndex.map((el, _i) => (
            <Navigation key={_i} value={el.value} id={el.id} href={el.href} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;