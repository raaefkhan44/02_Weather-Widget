/** @type {import('next').NextConfig} */
const nextConfig = {
  module.exports = {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH
  },
}
};

export default nextConfig;
