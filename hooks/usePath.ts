import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const usePath = (): boolean => {
    const router = useRouter();
    const [isPostPath, setIsPostPath] = useState(false);

    useEffect(() => {
        if (router.asPath.includes('/posts/')) {
            setIsPostPath(true);
        }
    });

    return isPostPath;
};

export default usePath;
