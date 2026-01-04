import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['iyzipay'],
  outputFileTracingIncludes: {
    '/api/**/*': ['./dev.db', './prisma/dev.db'],
  },
};

export default nextConfig;
