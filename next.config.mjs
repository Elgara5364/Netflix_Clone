import withVideos from "next-videos";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};
const withNextIntl = createNextIntlPlugin();

export default {
  ...nextConfig,
  ...withVideos(nextConfig),
  ...withNextIntl(nextConfig),
};
