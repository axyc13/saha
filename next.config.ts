import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore thread-stream test files, docs, and other non-runtime files
    config.module.rules.push({
      test: /thread-stream\/.*\/(test|README|LICENSE)\/?.*\.(ts|js|mjs|md|zip|yml)?$/,
      use: "null-loader",
    });

    return config;
  },
};

export default withPayload(nextConfig);
