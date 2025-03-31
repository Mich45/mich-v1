import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export const posts = (): string[] => {
    let fullPaths: string[] = [];
    const postsDirectory = path.resolve(process.cwd(), 'pages', 'posts');
    const allPosts = fs.readdirSync(postsDirectory);
    allPosts.forEach((post) => {
        console.log("Post:", post)
        const stats = fs.statSync(path.join(postsDirectory, post))
        if (stats.isFile()){
            fullPaths.push(`${postsDirectory}/${post}`);
            return 'It is a file'
        }

        else if (stats.isDirectory()){
            const content = fs.readdirSync(path.join(postsDirectory, post));
            console.log("Content of folder:", content)
            const mdxFile = content.filter(file => file.endsWith('.mdx'));
            console.log("MdxFile:", mdxFile)
            fullPaths.push(`${postsDirectory}/${post}/${mdxFile}`);
            return 'It is a directory'
        }
    });
    return fullPaths;
};

export const readPost = (postPath: string) => {
    const postContent = fs.readFileSync(postPath);
    const { data, content } = matter(postContent);
    const readTime = readingTime(content);
    const lastMod = fs.statSync(postPath);
    const lastModified = lastMod.mtime.toDateString();

    return {
        readTime,
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
        let aData = readPost(a);
        let bData = readPost(b)
        let aDate = new Date(aData.data.createdAt);
        let bDate = new Date(bData.data.createdAt);
        return aDate > bDate ? 1 : -1;
    });
    return sorted;
};
