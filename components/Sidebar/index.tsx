import { FC } from "react";
import { ICON, IconLibrary } from "../icons";
import Link from "next/link";
import './style.css';

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = (props) => {
    const styles = {
        container: [
            'fixed bottom-8 left-8',
            'z-50'
        ].join(' '),
        item: [
            'hover:w-14 hover:h-14',
            '[&:nth-child(1)]:hover:bg-red-200',
            '[&:nth-child(2)]:hover:bg-ocean',
            '[&:nth-child(3)]:hover:bg-deepkelp',
            
        ].join(' '),
        icon: [
            'fill-offwhite',
            'cursor-pointer'

        ].join(' ')
    }
    return (
        <div className={`menu ${styles.container}`}>
            <button className="menu-toggle hover:bg-midnight">
                <span aria-hidden="true" className="fill-white">{IconLibrary(ICON.MORE)}</span>
                <span className="sr-only">menu trigger</span>
            </button>
            <ul className="menu-items">
                <li className={`item ${styles.item}`} title="Access only page">
                    <button>
                        <span className="sr-only">access only page</span>
                        <Link href={'/access-only'}>
                            <span
                                aria-hidden="true"
                                className={`${styles.icon} `}
                            >
                                {IconLibrary(ICON.FAVORITE)}
                            </span>
                        </Link>
                    </button>
                </li>
                <li className={`item ${styles.item}`} title="Holiday card">
                    <button>
                        <Link href={'/'}>
                            <span
                                aria-hidden="true"
                                className={`${styles.icon}`}
                            >
                                {IconLibrary(ICON.HOLIDAY)}
                            </span>
                        </Link>
                        <span className="sr-only">holiday card page</span>
                    </button>
                </li>
                <li className={`item ${styles.item}`}title="Page under development">
                    <button>
                        <Link href={'/recipe'}>
                            <span
                                aria-hidden="true"
                                className={`${styles.icon}`}
                            >
                                {IconLibrary(ICON.MENU)}
                            </span>
                        </Link>
                        <span className="sr-only">recipe</span>
                    </button>
                </li>
            </ul>
        </div>

        //     <div className={styles.iconwrap}>

        // </div>

    )
}

export default Sidebar;