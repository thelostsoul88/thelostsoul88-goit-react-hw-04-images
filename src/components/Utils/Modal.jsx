import { useEffect } from 'react';
import css from '../styles.module.css';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleModalClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div onClick={handleModalClick} className={css.Overlay}>
        <div className={css.Modal}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
