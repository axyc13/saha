import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Externalize problematic packages
      const externals = config.externals || [];
      if (Array.isArray(externals)) {
        externals.push(
          "pino",
          "thread-stream",
          "pino-pretty",
          "sonic-boom",
          "pino-std-serializers"
        );
      }
      config.externals = externals;
    }
    return config;
  },
};

export default withPayload(nextConfig);
