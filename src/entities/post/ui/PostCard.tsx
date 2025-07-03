import React from 'react';
import styles from './postCard.module.css';



interface PostCardProps {
    title?: string;
    image?: string; 
    altImage?: string;
    desc?: string;
}

const PostCard: React.FC<PostCardProps> = ({title}) => {
    return ( 
        <li className={styles.item}>
            <h2>{title}</h2>
        </li>
    );
}

export default PostCard;