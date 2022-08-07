import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const posts = (): string[] => {
    let fullPaths: string[] = [];
    const postsDirectory = path.resolve(process.cwd(), 'pages', 'posts');
    const allPosts = fs.readdirSync(postsDirectory);
    allPosts.forEach((post) => {
        fullPaths.push(`${postsDirectory}/${post}`);
    });
    return fullPaths;
};

export const readPost = (postPath: string) => {
    const postContent = fs.readFileSync(postPath);
    const { data, content } = matter(postContent);
    const lastMod = fs.statSync(postPath);
    const created = fs.statSync(postPath);
    const lastModified = lastMod.mtime.toDateString();
    const createdAt = created.ctime.toDateString();

    console.log(lastModified, createdAt);

    return {
        createdAt,
        lastModified,
        data,
        content,
        postPath,
    };
};

export const sortPosts = () => {
    const allPosts = posts();

    // Sort posts based on date created
    const sorted = allPosts.sort((a, b) => {
        let aDate = fs.statSync(a);
        let bDate = fs.statSync(b);

        return aDate.birthtime > bDate.birthtime ? 1 : -1;
    });

    console.log(sorted);
    return sorted;
};
