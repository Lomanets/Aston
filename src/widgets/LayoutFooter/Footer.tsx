import React from 'react';
import styles from './Footer.module.css';


interface FooterProps {
    logo?: string; 
    altLogo?: string;
}

const Footer: React.FC<FooterProps> = ({logo, altLogo}) => {
    return ( 
        <footer className={styles.footer}>
            <a href='/'>
                <img 
                    src={logo} 
                    alt={altLogo} 
                />
            </a>
        </footer>
    );
}

export default Footer;