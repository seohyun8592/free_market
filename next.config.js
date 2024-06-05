/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/account/:path*",
          destination: `${process.env.NEXT_PUBLIC_BASE_URL}/account/:path*`,
        },
        {
          source: "/api/v1",
          destination: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        },
      ],
    }
  },
}

module.exports = nextConfig
