"use client"
import { usePathname } from 'next/navigation';
import { FC } from "react"
import FloatingMenu, { FloatingMenuItem } from "./FloatingMenu"
import { ExampleFloatingMenuData } from "./FloatingMenu/mockData"

const Menu:FC = (props) => {
    return (
      <FloatingMenu>
      {ExampleFloatingMenuData.map(menuItem =>
        <FloatingMenuItem 
          id={menuItem.id} 
          selected={usePathname() === menuItem.href} 
          // onSelect={() => setMenu(menuItem.key)}
          selectedItemBorderColor="molecule"
          href={menuItem.href}
          >
          {menuItem.children}
        </FloatingMenuItem>
      )}
    </FloatingMenu>
    )
};

export default Menu;