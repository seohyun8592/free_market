/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
      {
        source: "/test",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      },
    ]
  },
}

module.exports = nextConfig
