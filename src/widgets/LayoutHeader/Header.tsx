import React from 'react';
import styles from './Header.module.css';


interface HeaderProps {
    title?: string;
    logo?: string; 
    altLogo?: string;
}

const Header: React.FC<HeaderProps> = ({title, logo, altLogo}) => {
    return ( 
        <header className={styles.header}>
            <a href='/'>
                <img 
                    src={logo} 
                    alt={altLogo} 
                />
            </a>
            <h1 className={styles.header__title}>{title}</h1>
        </header>
    );
}

export default Header;