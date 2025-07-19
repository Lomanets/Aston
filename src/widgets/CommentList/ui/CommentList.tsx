import React, { useState, useCallback } from 'react';
import styles from './CommentList.module.css';

interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

interface CommentListProps {
  comments: Comment[];
  initialExpanded?: boolean;
}


let options : Intl.DateTimeFormatOptions= {
  year: "numeric",
  month: "long",
  day: "numeric",
}

function getDate(str : string) {
  const date = new Date(str);
  return date.toLocaleString('ru', options)
}

const CommentList: React.FC<CommentListProps> = ({ 
  comments, 
  initialExpanded = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  
  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  if (comments.length === 0) {
    return <div className={styles.empty}>Нет комментариев</div>;
  }

  return (
    <div className={styles.comment}>
      <button 
        onClick={toggleExpanded}
        className={styles.comment__button}
      >
        {isExpanded ? 'Свернуть комментарии' : 'Развернуть комментарии'}
        <span className={styles.arrow}> {isExpanded ? '↑' : '↓'}</span>
      </button>
      
      {isExpanded && (
        <ul className={styles.comment__list}>
          {comments.map(comment => (
            <li key={comment.id} className={styles.comment__item}>
              <div className={styles.comment__header}>
                <span className={styles.comment__author}>{comment.author}</span>
                <span className={styles.comment__date}>{getDate(comment.date)}</span>
              </div>
              <p className={styles.text}>{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;