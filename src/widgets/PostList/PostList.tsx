import React from 'react';
import styles from './PostList.module.css';


interface PostListProps {
    children: React.ReactNode;
}

const PostList: React.FC<PostListProps> = ({children}) => {
    return ( 
        <ul className={styles.list}>
           {children}
        </ul>
    );
}

export default PostList;