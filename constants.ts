export type Navigation = {
  id:number,
  value:string,
  href:string
}

export const NavigationIndex: Navigation[] = [
  // {
  //   id: 1,
  //   value: "2024 Highlights",
  //   href: "https://photos.app.goo.gl/TYTU5Q3zvLcusGzv7",
  // },
  // {
  //   id: 2,
  //   value: "Github",
  //   href: "https://daqichen.github.io/",
  // },
  // {
  //   id: 3,
  //   value: "Progress",
  //   href: "/progress",
  // },
  {
    id: 4,
    value: "♥️",
    href: "/access-only",
  },
];

export type ProgressState = 'intro' | 'idle' | 'proceed';
export type AccessOnlyState = '' | 'unknown' | 'denied' | 'authenticated';
