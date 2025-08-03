import React, { useMemo } from 'react';
import styles from './PostList.module.css';
import withLoading from '@shared/lib/hoc/WithLoading';
import { UserProfilePage } from '@/pages';

interface PostListProps {
    children: React.ReactNode;
}

const PostList: React.FC<PostListProps> = ({ children }) => {
    const memoizedChildren = useMemo(() => children, [children]);

    return (
        <ul className={styles.list}>
            {memoizedChildren}
        </ul>
    );
};

export default withLoading(PostList);