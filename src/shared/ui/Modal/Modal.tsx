import styles from './Modal.module.css'

interface ModalProps{
    textModal: string;
    onClickModal: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal: React.FC<ModalProps> = ( {textModal, onClickModal} ) => {
    return (
        <div className={styles.modal}>
            <h2 className={styles.modal__title}>{textModal}</h2>
            <button className={styles.modal__button} onClick={onClickModal}>x</button>
        </div>
    );
}

export default Modal;