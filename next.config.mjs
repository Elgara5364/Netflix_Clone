import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

export default {
  ...nextConfig,
  ...withVideos(nextConfig),
};
