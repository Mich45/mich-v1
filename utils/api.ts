import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const posts = (): string[] => {
    let fullPath: string[] = [];
    const homeDirectory = process.cwd();
    const postsDirectory = path.join(homeDirectory, 'pages', 'posts');
    const allposts = fs.readdirSync(postsDirectory);
    allposts.forEach((post) => {
        fullPath.push(`${postsDirectory}/${post}`);
    });
    return fullPath;
};

export const readPost = (postPath: string) => {
    const postContent = fs.readFileSync(postPath);
    const { data, content } = matter(postContent);
    return {
        data,
        content,
        postPath,
    };
};

export const sortPosts = () => {
    const allPosts = posts();

    const sorted = allPosts.sort();
};
