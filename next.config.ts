import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Find the existing rule for SVGs and exclude them
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => any; }; }) => typeof rule !== "string" && rule.test?.test?.(".svg")
    );
    if (fileLoaderRule && typeof fileLoaderRule !== "string") {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
