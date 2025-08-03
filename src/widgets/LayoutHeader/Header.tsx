import React, { useState } from 'react';
import styles from './Header.module.css';
import { Modal, Button } from '@shared/ui';
import { PostLengthFilter } from '@features/PostLengthFilter/ui/PostLengthFilter';
import type { Post } from '@entities/post/model/types'



interface HeaderProps {
    title?: string;
    logo?: string;
    altLogo?: string;
    extraContent?: React.ReactNode;
    posts: Post[];
    onFilter:  (filteredPosts: Post[]) => void;
}

const Header: React.FC<HeaderProps> = ({ title, logo, altLogo, extraContent, posts, onFilter }) => {
    const [modalWindow, setModalWindow] = useState(false)

    const handleToggleModal = () => setModalWindow(!modalWindow);
    const handleCloseModal = () => setModalWindow(false);

    return (
        <header className={styles.header}>
            <div className={styles.header__wrap}>
                <a href='/'>
                    <img
                        src={logo}
                        alt={altLogo}
                    />
                </a>
                <h1 className={styles.header__title}>{title}</h1>
                {extraContent}
                {
                    modalWindow && 
                    <Modal isOpen={modalWindow} onClose={handleCloseModal}>
                        <Modal.Header>
                            <h2 className={styles.modal__title}>Проект создан для интенсива по Front-end в компанию Aston</h2>
                        </Modal.Header>
                        <Modal.Body>Содержимое</Modal.Body>
                        <Modal.Footer>Футер</Modal.Footer>
                    </Modal>
                }
                <Button
                    textButton={'О проекте'}
                    onClick={handleToggleModal}
                />
            </div>
            <PostLengthFilter 
                posts={posts} 
                onFilter={onFilter} 
            />
        </header >
    );
}

export default Header;