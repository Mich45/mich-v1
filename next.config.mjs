/** @type {import('next').NextConfig} */

import nextMdx from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';
import remarkGfm from 'remark-gfm';
import recmaNextjsStaticProps from 'recma-nextjs-static-props';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug'

const nextConfig = {
    reactStrictMode: true,

    compiler: {
        styledComponents: true,
    },
};

const withMDX = nextMdx({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkFrontmatter, rehypeSlug, [remarkMdxFrontmatter, { name: 'frontmatter' }], remarkGfm, [remarkToc, { maxDepth: 2 }]],
        recmaPlugins: [recmaNextjsStaticProps],
        rehypePlugins: [],
        providerImportSource: '@mdx-js/react',
    },
});


const config = withMDX(nextConfig);

config.pageExtensions = ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'];

export default config;
