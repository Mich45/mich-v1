/** @type {import('next').NextConfig} */

const remarkFrontmatter = import('remark-frontmatter');
const remarkMdxFrontmatter = import('remark-mdx-frontmatter');
const remarkGfm = import('remark-gfm');

const nextConfig = {
    reactStrictMode: true,

    compiler: {
        styledComponents: true,
    },
};

const withMDX = require('@next/mdx')({
    options: {
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
        rehypePlugins: [],
        providerImportSource: '@mdx-js/react',
    },
});

const config = withMDX(nextConfig);

config.pageExtensions = ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'];

module.exports = config;
