import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

export async function GET() {
    return Response.json({ ACCESS_USER: serverRuntimeConfig?.ACCESS_USER, 
      ACCESS_CODE: serverRuntimeConfig?.ACCESS_CODE })
  }