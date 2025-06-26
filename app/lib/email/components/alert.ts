/* eslint-disable @typescript-eslint/no-unused-vars */
import type { AlertType } from '../types';

export const createAlert = (
  icon: string,
  title: string,
  message: string,
  type: AlertType = 'info'
): string => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
      <td class="email-alert">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="width: 40px; vertical-align: top; padding-right: 15px;">
              <div style="
                width: 32px; 
                height: 32px; 
                background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); 
                border-radius: 6px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                font-size: 18px;
                text-align: center;
                line-height: 32px;
              ">${icon}</div>
            </td>
            <td style="vertical-align: top;">
              <h3 class="email-alert-title">${title}</h3>
              <p class="email-alert-content">${message}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;
