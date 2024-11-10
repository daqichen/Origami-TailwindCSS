import { ICON, IconLibrary } from "../icons";
import { FloatingMenuItemProp } from "./floatingMenu";

export const ExampleFloatingMenuData: FloatingMenuItemProp[] = [
    {
        id: 'tessellation',
        children:<>
        <span className="fill-molecule mr-2">{IconLibrary(ICON.TESSELLATION)}</span>
            Tessellation
        </>,
        href: '/tessellation'
    },
    {
        id: 'popup',
        children:<>
        <span className="fill-molecule mr-2">{IconLibrary(ICON.POPUP)}</span>
            Pop-up Card
        </>,
        href: '/pop-up'
    },
    {
        id: 'kinetic',
        children:<>
        <span className="fill-molecule mr-2">{IconLibrary(ICON.POPUP)}</span>
            Kinetic Origami
        </>,
        href: '/kinetic'
    },
    {
        id: 'bestPractices',
        children:<>
        <span className="fill-molecule mr-2">{IconLibrary(ICON.POPUP)}</span>
            Best Practices
        </>,
        href: '/best-practices'
    },
    // {
    //     id: 'access-only',
    //     children:<>
    //     <span className="fill-molecule mr-2">{IconLibrary(ICON.LOCK)}</span>
    //         Access Only
    //     </>,
    //     href: '/access-only'
    // }
]