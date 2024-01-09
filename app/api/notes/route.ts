import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

export async function GET() {
    return Response.json({NOTES: JSON.parse(serverRuntimeConfig?.NOTES ?? {})});
  }