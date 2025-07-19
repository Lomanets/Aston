import React, { useState } from 'react';
import styles from './PostLengthFilter.module.css'
import type { Post } from '@entities/post/model/types';
import { Button } from '@/shared/ui';

interface PostLengthFilterProps {
  posts: Post[];
  onFilter: (filteredPosts: Post[]) => void;
}

export const PostLengthFilter: React.FC<PostLengthFilterProps> = ({ posts, onFilter }) => {
  const [minLength, setMinLength] = useState(0);

  const handleFilter = () => {
    const filtered = posts.filter(post => post.title.length >= minLength);
    onFilter(filtered);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__wrap}>
        <input
          className={styles.filter__input}
          type="number"
          value={minLength}
          onChange={(e) => setMinLength(Number(e.target.value))}
          id='filter'
          name='filter'
        />
        <label
          htmlFor="filter"
          className={styles.filter__label}
        >
          Введите минимальную длину заголовка
        </label>
      </div>
      <Button
        textButton="Фильтровать"
        onClick={handleFilter}
      />
    </div>
  );
};
