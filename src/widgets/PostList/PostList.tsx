import React from 'react';
import styles from './postList.module.css';
import PostCard from '../../entities/post/ui/PostCard';


interface PostListProps {
    data: string[];
}

const PostList: React.FC<PostListProps> = ({data}) => {
    return ( 
        <ul className={styles.list}>
           <PostCard title={data[0]}/>
           <PostCard title={data[1]}/>
           <PostCard title={data[2]}/>
        </ul>
    );
}

export default PostList;