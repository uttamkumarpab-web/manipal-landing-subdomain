
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  turbopack: {
    root: __dirname,
  },

  async redirects() {
    return [
      {
        source: "/terms-and-conditions",
        destination:
          "https://radhyaeducationacademy.com/terms-and-conditions/",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination:
          "https://radhyaeducationacademy.com/privacy-policy/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
