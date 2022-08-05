import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const posts = (): string[] => {
    let fullPaths: string[] = [];
    const postsDirectory = path.resolve(process.cwd(), 'pages', 'posts');
    const allPosts = fs.readdirSync(postsDirectory);
    console.log(allPosts);
    allPosts.forEach((post) => {
        fullPaths.push(`${postsDirectory}/${post}`);
    });
    return fullPaths;
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
    // Sort posts based on date created
    const sorted = allPosts.sort((a, b) => {
        const aDate = fs.stat(a, (err, stats) => {
            if (err) {
                throw err;
            }
            return stats.birthtime;
        });
        const bDate = fs.stat(b, (err, stats) => {
            if (err) {
                throw err;
            }
            return stats.birthtime;
        });
        return aDate > bDate ? 1 : -1;
    });

    return sorted;
};
