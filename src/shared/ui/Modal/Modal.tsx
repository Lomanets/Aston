import { createPortal } from 'react-dom';
import styles from './Modal.module.css'

interface ModalProps{
    onClick: (React.MouseEventHandler<HTMLButtonElement>);
}

const Modal: React.FC<ModalProps> = ( {onClick} ) => {
    return (
    <>
        {createPortal (
        <div className={styles.modal}>
            <h2 className={styles.modal__title}>Проект создан для интенсива по Front-end в компанию Aston</h2>
            <button className={styles.modal__button} onClick={onClick}>x</button>
        </div>,
        document.body)}
    </>
)}

export default Modal;