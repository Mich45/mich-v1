/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    compiler: {
        styledComponents: true,
    },
};

const withMDX = require('@next/mdx')({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        providerImportSource: '@mdx-js/react',
    },
});

const config = withMDX(nextConfig);

config.pageExtensions = ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'];

module.exports = config;
