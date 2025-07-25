import { useState } from 'react';
import styles from './imageModal.module.css';

export default function ImageModal({ src, alt, className }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={className}
                onClick={openModal}
                style={{ cursor: 'pointer' }}
            />
            {isOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <span className={styles.close}>&times;</span>
                    <img src={src} alt={alt} className={styles.modalContent} />
                </div>
            )}
        </>
    );
}
