/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
      {
        source: "/",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      },
    ]
  },

  async headers() {
    return [
      {
        // 모든 CSS 파일에 대한 MIME 타입을 text/css로 변경
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Content-Type",
            value: "text/css",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
