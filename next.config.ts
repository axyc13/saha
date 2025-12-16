import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        pino: "commonjs pino",
        "thread-stream": "commonjs thread-stream",
        "pino-pretty": "commonjs pino-pretty",
      });
    }
    return config;
  },
};

export default withPayload(nextConfig);
