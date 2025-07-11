import styles from './Button.module.css';

interface ButtonProps{
    textButton: string;
    onClickModal: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ( {textButton, onClickModal} ) => {
    return ( 
        <button 
            className={styles.button} 
            onClick={onClickModal}
        >
            {textButton}
        </button> 
    );
}

export default Button;