'use client'

import { useRouter } from "next/router";

export function useBasePath(){
    const { basePath } = useRouter();
    return basePath;
};

export function getFinalPath(src: string){
    const basePath = useBasePath();
    return basePath?.charAt(0) === "/" ? basePath + src : src;
}
  