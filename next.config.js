/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    basePath: '/year2024',
    serverRuntimeConfig: {
        ACCESS_USER: process?.env?.ACCESS_USER,
        ACCESS_CODE: process?.env?.ACCESS_CODE,
        NOTES: process?.env?.NOTES
      }
}

module.exports = nextConfig
