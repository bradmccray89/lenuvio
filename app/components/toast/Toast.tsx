'use client';

import { useEffect } from 'react';
import styles from './Toast.module.css';
import {
  MdCheckCircle,
  MdError,
  MdWarning,
  MdInfo,
  MdClose,
} from 'react-icons/md';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
  position?:
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft'
    | 'topCenter'
    | 'bottomCenter';
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
  position = 'topRight',
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <MdCheckCircle />;
      case 'error':
        return <MdError />;
      case 'warning':
        return <MdWarning />;
      case 'info':
        return <MdInfo />;
      default:
        return <MdInfo />;
    }
  };

  const handleClose = () => {
    onClose(id);
  };

  return (
    <div className={`${styles.toast} ${styles[type]} ${styles[position]}`}>
      <div className={styles.toastContent}>
        <div className={styles.toastIcon}>{getIcon()}</div>
        <div className={styles.toastText}>
          <div className={styles.toastTitle}>{title}</div>
          {message && <div className={styles.toastMessage}>{message}</div>}
        </div>
        <button
          className={styles.toastClose}
          onClick={handleClose}
          aria-label='Close notification'>
          <MdClose />
        </button>
      </div>

      {duration > 0 && (
        <div className={styles.toastProgress}>
          <div
            className={styles.toastProgressBar}
            style={{
              animationDuration: `${duration}ms`,
              animationPlayState: 'running',
            }}
          />
        </div>
      )}

      {/* Floating particles */}
      <div className={styles.toastParticles}>
        <div className={styles.toastParticle}></div>
        <div className={styles.toastParticle}></div>
        <div className={styles.toastParticle}></div>
      </div>
    </div>
  );
};

export default Toast;
