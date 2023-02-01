/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    KAKAO_API: process.env.NEXT_PUBLIC_KAKAO_API,
  },
  images: {
    domains: ["search1.kakaocdn.net"],
  },
};

module.exports = nextConfig;
