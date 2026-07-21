import type { NextConfig } from "next";
import { repositoryName as configuredRepositoryName } from "./site.config";

// Change this one variable if the GitHub repository name changes.
const repositoryName =
  process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_NAME ?? configuredRepositoryName;

const isGitHubPages =
  process.env.GITHUB_PAGES === "true" || process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const basePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: process.cwd()
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_GITHUB_REPOSITORY_NAME: repositoryName
  }
};

export default nextConfig;
