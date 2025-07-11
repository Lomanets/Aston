import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Header.module.css';
import Modal from '../../shared/ui/Modal/Modal';
import Button from '../../shared/ui/Button/Button'

interface HeaderProps {
    title?: string;
    logo?: string; 
    altLogo?: string;
    extraContent?: React.ReactNode;

}

const Header: React.FC<HeaderProps> = ({title, logo, altLogo, extraContent}) => {
    const [modalWindow, setModalWindow] = useState(false)


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
            {modalWindow && createPortal (
                <Modal 
                    textModal={'Проект создан для интенсива по Front-end в компанию Aston'} 
                    onClickModal={() => { setModalWindow(false) }} 
                />,
                document.body
            )}
            <Button 
                textButton={'О проекте'} 
                onClickModal={() => { setModalWindow(!modalWindow) }} 
            />
        </header>
    );
}

export default Header;