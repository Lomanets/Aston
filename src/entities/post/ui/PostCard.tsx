import React from 'react';
import styles from './PostCard.module.css';



interface PostCardProps {
    firstName?: string;
    lastName?: string;
    userImage?: string;
    children?: React.ReactNode;
}

const PostCard: React.FC<PostCardProps> = ({ firstName, lastName, children}) => {
    return (
        <li className={styles.item}>
            <p className={styles.item__text}></p>
            <h2>{firstName} {lastName}</h2>
            
            {children}
        </li>
    );
}

export default PostCard;