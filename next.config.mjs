/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
        ],
    },
    webpack: (config, { buildId, dev }) => {
        config.resolve.symlinks = false
        return config
    }
};

export default nextConfig;
