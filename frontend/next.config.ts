import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: 'custom',
    loaderFile: 'src/components/actions/fetchimage.tsx'
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  },
  output: "standalone"
};

export default nextConfig;
