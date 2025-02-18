import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src/assets/styles/abstracts'],
    prependData: `@import "index";`,
  },
};

export default nextConfig;
