/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/year2024',
    serverRuntimeConfig: {
        ACCESS_USER: process?.env?.ACCESS_USER,
        ACCESS_CODE: process?.env?.ACCESS_CODE,
        NOTES: process?.env?.NOTES
      },
    // images: {
    //     domains: ['localhost']
    //   }
}

module.exports = nextConfig
