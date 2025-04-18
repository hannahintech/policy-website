// next.config.js
import nextMDX from '@next/mdx';
const withMDX = nextMDX();

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

export default withMDX(nextConfig);
