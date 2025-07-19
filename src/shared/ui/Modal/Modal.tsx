import { createContext, useContext } from 'react';
import type { ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css'

interface ModalContextProps {
    onClose: () => void;
}

const ModalContext = createContext<ModalContextProps>({
    onClose: () => { },
});

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const ModalComponent: FC<ModalProps> & {
    Header: FC<{ children: ReactNode }>;
    Body: FC<{ children: ReactNode }>;
    Footer: FC<{ children: ReactNode }>;
} = ({ children, isOpen, onClose }) => {


    return (
        <ModalContext.Provider value={{ onClose }}>
            
            {createPortal(
                isOpen && (
                    <div className={styles.modal}>
                        <div className={styles.modal__content}>
                            {children}
                        </div>
                    </div>
                ),
                document.body
            )}
        </ModalContext.Provider>
    );
};


// Вложенные компоненты
interface ModalHeaderProps {
    children: ReactNode;
}

const ModalHeader: FC<ModalHeaderProps> = ({ children }) => {
    const { onClose } = useContext(ModalContext);
    return (
        <div className="modal-header">
            {children}
            <button onClick={onClose} className={styles.modal__button}>
                x
            </button>
        </div>
    );
};

interface ModalBodyProps {
    children: ReactNode;
}

const ModalBody: FC<ModalBodyProps> = ({ children }) => (
    <div className="modal-body">{children}</div>
);

interface ModalFooterProps {
    children: ReactNode;
}

const ModalFooter: FC<ModalFooterProps> = ({ children }) => (
    <div className="modal-footer">{children}</div>
);

// Присоединяем подкомпоненты к основному компоненту
ModalComponent.Header = ModalHeader;
ModalComponent.Body = ModalBody;
ModalComponent.Footer = ModalFooter;

export default ModalComponent;