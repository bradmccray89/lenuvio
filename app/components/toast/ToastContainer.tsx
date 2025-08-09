// components/Toast/ToastContainer.tsx
'use client';

import Toast, { ToastProps } from './Toast';
import styles from './ToastContainer.module.css';

export interface ToastData {
  id: string;
  type: ToastProps['type'];
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContainerProps {
  toasts: ToastData[];
  onClose: (id: string) => void;
  position?: ToastProps['position'];
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onClose,
  position = 'topRight',
}) => {
  if (toasts.length === 0) return null;

  return (
    <div className={`${styles.toastContainer} ${styles[position]}`}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          title={toast.title}
          message={toast.message}
          duration={toast.duration}
          onClose={onClose}
          position={position}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
