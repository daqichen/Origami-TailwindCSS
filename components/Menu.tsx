"use client"
import { usePathname } from 'next/navigation';
import { FC } from "react"
import FloatingMenu, { FloatingMenuItem } from "./FloatingMenu"
import { ExampleFloatingMenuData } from "./FloatingMenu/mockData"

const Menu:FC = (props) => {
    const path = usePathname();
    return (
      <FloatingMenu>
      {ExampleFloatingMenuData.map(menuItem =>
        <FloatingMenuItem 
          id={menuItem.id} 
          key={menuItem.id}
          selected={path === menuItem.href} 
          // onSelect={() => setMenu(menuItem.key)}
          href={menuItem.href}
          >
          {menuItem.children}
        </FloatingMenuItem>
      )}
    </FloatingMenu>
    )
};

export default Menu;