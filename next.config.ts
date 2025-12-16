import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (isServer) {
      config.externals.push("thread-stream");
    }
    return config;
  },
};

export default withPayload(nextConfig);
