/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/api/v1:path*",
          destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1:path*`,
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
