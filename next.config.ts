import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src/assets/styles/abstracts'],
    prependData: `@use "index" as *;`,
  },
};

export default nextConfig;
