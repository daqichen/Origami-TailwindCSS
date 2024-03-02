/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    serverRuntimeConfig: {
        ACCESS_USER: process?.env?.ACCESS_USER,
        ACCESS_CODE: process?.env?.ACCESS_CODE,
        NOTES: process?.env?.NOTES
      }
}

module.exports = nextConfig
