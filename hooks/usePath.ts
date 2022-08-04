import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const usePath = (): boolean[] => {
    const router = useRouter();
    const [isPostPath, setIsPostPath] = useState(false);
    const [isBlogPath, setIsBlogPath] = useState(false);

    useEffect(() => {
        if (router.asPath.includes('/posts/')) {
            setIsPostPath(true);
        }
        if (router.asPath.includes('/blog/')) {
            setIsBlogPath(true);
        }
    });

    return [isPostPath, isBlogPath];
};

export default usePath;
