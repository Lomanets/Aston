import React, { useState } from 'react';
import styles from './Header.module.css';
import { Modal, Button } from '@shared/ui';


interface HeaderProps {
    title?: string;
    logo?: string; 
    altLogo?: string;
    extraContent?: React.ReactNode;

}

const Header: React.FC<HeaderProps> = ({title, logo, altLogo, extraContent}) => {
    const [modalWindow, setModalWindow] = useState(false)

    const handleCloseModal = () => setModalWindow(false);
    const handleToggleModal = () => setModalWindow(!modalWindow);

    return ( 
        <header className={styles.header}>
            <a href='/'>
                <img 
                    src={logo} 
                    alt={altLogo} 
                />
            </a>
            <h1 className={styles.header__title}>{title}</h1>
            {extraContent}
            {modalWindow && <Modal onClick={handleCloseModal} />}
            <Button 
                textButton={'О проекте'} 
                onClick={handleToggleModal} 
            />
        </header>
    );
}

export default Header;