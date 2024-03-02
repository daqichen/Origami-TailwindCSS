import React, { FC } from "react";
import Link from "next/link";
import { NavigationIndex } from "../../constants";
import Navigation from "../Navigation";
import { Logo } from "../Icons/Logo";
import { styles } from './style';

interface HeaderProps {
//   user: User | null;
}

const Header: FC<HeaderProps> = async () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerDiv}>
        <Link href={"/"}>
            <div className={styles.leftHeaderDiv}>
                <Logo/>
                <h1 className={styles.headerTitle}>Documenting 2024</h1>
            </div>
        </Link>
        <nav className={styles.navigationLinksContainer}>
          {NavigationIndex.map((el, _i) => (
            <Navigation key={_i} value={el.value} id={el.id} href={el.href} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;