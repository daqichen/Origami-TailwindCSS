import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

export async function POST(request: Request) {
  const data = await request.json();
  if (data.name === serverRuntimeConfig?.ACCESS_USER && data.code === serverRuntimeConfig?.ACCESS_CODE) {
    return Response.json({ authenticated: true });
  }
  return Response.json({ authenticated: false });
}
