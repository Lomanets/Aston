import React from 'react';
import styles from './PostCard.module.css';



interface PostCardProps {
    title?: string;
    image?: string;
    altImage?: string;
    postText?: string;
    children?: React.ReactNode;
}

const PostCard: React.FC<PostCardProps> = ({ title, postText, children}) => {
    return (
        <li className={styles.item}>
            <h2>{title}</h2>
            <p className={styles.item__decs}>{postText}</p>
            {children}
        </li>
    );
}

export default PostCard;