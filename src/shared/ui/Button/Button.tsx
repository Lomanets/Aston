import styles from './Button.module.css';

interface ButtonProps{
    textButton: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ( {textButton, onClick} ) => {
    return ( 
        <button 
            className={styles.button} 
            onClick={onClick}
        >
            {textButton}
        </button> 
    );
}

export default Button;