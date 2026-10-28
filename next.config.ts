import type { NextConfig } from 'next';

// GitHub Pages project sites live under /<repository-name>.
// User/organization sites (owner.github.io) are served from the root.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const isUserOrOrganizationSite = Boolean(repository && owner && repository === `${owner}.github.io`);
const basePath = process.env.GITHUB_ACTIONS === 'true' && repository && !isUserOrOrganizationSite
  ? `/${repository}`
  : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
