/** @type {import('next').NextConfig} */

import nextMdx from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';
import remarkGfm from 'remark-gfm';
import recmaNextjsStaticProps from 'recma-nextjs-static-props';

const nextConfig = {
    reactStrictMode: true,

    compiler: {
        styledComponents: true,
    },
};

const withMDX = nextMdx({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'frontmatter' }], remarkGfm],
        recmaPlugins: [recmaNextjsStaticProps],
        rehypePlugins: [],
        providerImportSource: '@mdx-js/react',
    },
});

const config = withMDX(nextConfig);

config.pageExtensions = ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'];

export default config;
