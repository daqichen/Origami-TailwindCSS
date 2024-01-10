import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();
import { NextRequest } from 'next/server';


export async function GET(request: NextRequest) {
  const name = request?.nextUrl?.searchParams?.get('name');
  const code = request?.nextUrl?.searchParams?.get('code');
  // const { searchParams } = new URL(request.url);
  // const name = searchParams.get('name');
  // const code = searchParams.get('code');
  // console.log(name, code)
  console.log(request.nextUrl.basePath)
  if (name === serverRuntimeConfig?.ACCESS_USER && code === serverRuntimeConfig?.ACCESS_CODE) {
    return Response.json({ authenticated: true });
  }
  return Response.json({ authenticated: false });
}

export const dynamic = "force-dynamic";