export  const styles = {
    container: ['flex', 'flex-col', 'py-10', 'md:py-28', 'items-center', '', 'gap-8', 'md:gap-12', 'w-full', 'max-w-screen-xl', 'mx-5', 'md:mx-20'].join(' '),
    subContainer: ['flex', 'flex-col', 'items-center', 'w-full', 'md:max-w-[800px]', 'text-center', 'gap-8'].join(' '),
    title: ['text-textColor', 'text-2xl', 'font-gsans', 'font-bold', 'md:text-2xl'].join(' '),
    altTitle: ['text-textColor', 'text-md', 'font-gsans', 'font-bold', 'md:text-lg'].join(' '),
    menuButton: ['inline-flex', 'justify-center', 'items-center', 'w-full', 'px-4', 'py-2', 'text-sm','font-gsans', 'font-medium', 'text-white', 'bg-gray-800', 'hover:bg-gray-700', 'focus:outline-none', 'focus:bg-gray-700'].join(' '),
    expandSvg: "w-4 h-4 ml-2 -mr-1",
    menuContainer: ['absolute', 'left-0', 'w-40', 'mt-1', 'origin-top-left', 'bg-white', 'divide-y', 'divide-gray-100', 'rounded-md', 'shadow-lg'].join(' '),
    menuOptions: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
  };