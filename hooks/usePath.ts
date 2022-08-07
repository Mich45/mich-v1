import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const usePath = (): boolean => {
    const router = useRouter();
    const [path, setPath] = useState(false);

    useEffect(() => {
        if (
            router.asPath.includes('/posts/') ||
            router.asPath.includes('blog')
        ) {
            setPath(true);
        }
    });

    return path;
};

export default usePath;
