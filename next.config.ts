// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/patti', // 將這行設為你的 repo 名稱
  images: {
    unoptimized: true, // GitHub Pages 不支援 next/image 優化
  },
};

export default nextConfig;
