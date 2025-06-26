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
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="x-apple-disable-message-reformatting">
        <title>New Contact Form Submission</title>
        
        <!--[if mso]>
        <noscript>
          <xml>
            <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        </noscript>
        <![endif]-->
        
        <style>
          ${emailStyles}
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #0f172a; color: #e5e5e5; line-height: 1.6; width: 100%; min-width: 100%;">
        
        <!-- Email Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #0f172a;">
          <tr>
            <td align="center" style="padding: 20px 0;">
              
              <!-- Main Content Table -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="email-container" style="max-width: 600px; background-color: #1e293b; border-radius: 8px; overflow: hidden;">
                
                <!-- Header -->
                ${createHeader('New Contact Form Submission')}
                
                <!-- Content -->
                <tr>
                  <td class="email-content">
                    
                    <!-- Alert Section -->
                    ${createAlert(
                      serviceDetails.icon,
                      'New Contact Form Submission',
                      `Someone is interested in ${serviceDetails.name}`
                    )}
                    
                    <!-- Contact Details -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-details">
                      <tr>
                        <td class="email-detail-row">
                          <p class="email-detail-label">Name:</p>
                          <p class="email-detail-value">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-detail-row">
                          <p class="email-detail-label">Email:</p>
                          <p class="email-detail-value">
                            <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-detail-row">
                          <p class="email-detail-label">Service:</p>
                          <p class="email-detail-value">${serviceDetails.icon} ${serviceDetails.name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-detail-row">
                          <p class="email-detail-label">Submitted:</p>
                          <p class="email-detail-value">${formatDate()}</p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Message Section -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 20px 0;">
                          <p class="email-detail-label" style="margin-bottom: 12px;">Message:</p>
                          <div class="email-message">${message}</div>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Action Buttons -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td class="email-center">
                          ${createButton(
                            `Reply to ${name}`,
                            `mailto:${email}?subject=Re: Your inquiry about ${serviceDetails.name}&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out! I'd love to discuss your ${serviceDetails.name} needs.%0D%0A%0D%0ABest regards,%0D%0ABrandon`,
                            'primary'
                          )}
                          <br>
                          ${createButton('View Dashboard', 'https://lenuv.io/admin', 'secondary')}
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                ${createFooter('contact')}
                
              </table>
              
            </td>
          </tr>
        </table>
        
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
