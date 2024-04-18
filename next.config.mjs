/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    async redirects() {
        return [
          '/',
        ].map(r => ({
          source: r,
          destination: '/it' + r,
          permanent: true
        }));
      }
};

export default nextConfig;
