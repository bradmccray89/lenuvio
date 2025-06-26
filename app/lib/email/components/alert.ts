import type { AlertType } from '../types';

export const createAlert = (
  icon: string,
  title: string,
  message: string,
  type: AlertType = 'info'
): string => {
  const alertColors: Record<AlertType, string> = {
    info: 'rgba(34, 211, 238, 0.1)',
    success: 'rgba(34, 197, 94, 0.1)',
    warning: 'rgba(251, 191, 36, 0.1)',
    error: 'rgba(239, 68, 68, 0.1)',
  };

  const borderColors: Record<AlertType, string> = {
    info: 'rgba(34, 211, 238, 0.3)',
    success: 'rgba(34, 197, 94, 0.3)',
    warning: 'rgba(251, 191, 36, 0.3)',
    error: 'rgba(239, 68, 68, 0.3)',
  };

  return `
    <div style="
      background: ${alertColors[type]};
      border: 1px solid ${borderColors[type]};
      border-radius: 12px;
      padding: 20px;
      margin: 20px 0;
      display: flex;
      align-items: center;
      gap: 15px;
    ">
      <div style="
        font-size: 24px;
        background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
        width: 48px; height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      ">${icon}</div>
      <div>
        <h3 style="
          color: #f1f5f9;
          font-size: 1.1rem;
          margin-bottom: 4px;
        ">${title}</h3>
        <p style="
          color: #cbd5e1;
          font-size: 0.9rem;
          margin: 0;
        ">${message}</p>
      </div>
    </div>
  `;
};
