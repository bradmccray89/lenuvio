import {
  emailStyles,
  createHeader,
  createFooter,
  createButton,
  createAlert,
} from '../../components/index';
import { getServiceDetails, formatDate } from '../../utils/index';
import type { ContactFormData, EmailTemplate } from '../../types';

export const contactNotificationTemplate = (
  formData: ContactFormData
): EmailTemplate => {
  const { name, email, service, message } = formData;
  const serviceDetails = getServiceDetails(service);

  return {
    to: 'hello@lenuv.io',
    from: 'noreply@lenuv.io',
    subject: `New Contact Form Submission - ${serviceDetails.name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>${emailStyles}</style>
      </head>
      <body>
        <div class="container">
          ${createHeader('New Contact Form Submission')}
          
          <div class="content">
            ${createAlert(
              serviceDetails.icon,
              'New Contact Form Submission',
              `Someone is interested in ${serviceDetails.name}`
            )}
            
            <div style="
              background: rgba(255, 255, 255, 0.02);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              padding: 25px;
              margin-bottom: 30px;
            ">
              <div style="display: flex; padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <div style="font-weight: 600; color: #94a3b8; min-width: 120px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Name:</div>
                <div style="color: #f1f5f9; flex: 1; word-wrap: break-word;">${name}</div>
              </div>
              <div style="display: flex; padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <div style="font-weight: 600; color: #94a3b8; min-width: 120px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Email:</div>
                <div style="color: #f1f5f9; flex: 1; word-wrap: break-word;">
                  <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a>
                </div>
              </div>
              <div style="display: flex; padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <div style="font-weight: 600; color: #94a3b8; min-width: 120px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Service:</div>
                <div style="color: #f1f5f9; flex: 1; word-wrap: break-word;">${serviceDetails.icon} ${serviceDetails.name}</div>
              </div>
              <div style="display: flex; padding: 12px 0;">
                <div style="font-weight: 600; color: #94a3b8; min-width: 120px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Submitted:</div>
                <div style="color: #f1f5f9; flex: 1; word-wrap: break-word;">${formatDate()}</div>
              </div>
            </div>
            
            <div style="
              background: rgba(255, 255, 255, 0.02);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              padding: 25px;
              margin-bottom: 30px;
            ">
              <div style="
                font-weight: 600;
                color: #94a3b8;
                font-size: 0.85rem;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-bottom: 12px;
              ">Message:</div>
              <div style="
                color: #e2e8f0;
                line-height: 1.7;
                white-space: pre-wrap;
                background: rgba(0, 0, 0, 0.2);
                padding: 15px;
                border-radius: 8px;
                border-left: 3px solid #06b6d4;
              ">${message}</div>
            </div>
            
            <div style="text-align: center;">
              ${createButton(
                `Reply to ${name}`,
                `mailto:${email}?subject=Re: Your inquiry about ${serviceDetails.name}&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out! I'd love to discuss your ${serviceDetails.name} needs.%0D%0A%0D%0ABest regards,%0D%0ABrandon`,
                'primary'
              )}
              ${createButton('View Dashboard', 'https://lenuv.io/admin', 'secondary')}
            </div>
          </div>
          
          ${createFooter('contact')}
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission - ${serviceDetails.name}

Name: ${name}
Email: ${email}
Service: ${serviceDetails.name}
Submitted: ${formatDate()}

Message:
${message}

---
Reply to this inquiry: mailto:${email}
Dashboard: https://lenuv.io/admin
    `,
  };
};
