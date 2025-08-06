import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['s2.coinmarketcap.com',"s3.coinmarketcap.com","cdn.sanity.com","encrypted-tbn0.gstatic.com"]
  }
};

export default nextConfig;
