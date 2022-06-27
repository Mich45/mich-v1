import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const posts = (): string[] => {
    const homeDirectory = process.cwd();
    const postsDirectory = path.join(homeDirectory, 'articles');
    const allposts = fs.readdirSync(postsDirectory);
    return allposts;
};

export const readPost = (postPath: string) => {
    const homeDirectory = process.cwd();
    const post = path.join(homeDirectory, 'articles', postPath);
    const postContent = fs.readFileSync(post);
    const { data, content } = matter(postContent);
    return {
        data,
        content,
        postPath,
    };
};

export const getAllPosts = () => {};
