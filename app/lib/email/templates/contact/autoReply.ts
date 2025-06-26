import {
  emailStyles,
  createHeader,
  createFooter,
  createButton,
  createAlert,
} from '../../components/index';
import {
  getServiceDetails,
  formatDate,
  generateReferenceId,
} from '../../utils/index';
import type { ContactFormData, EmailTemplate } from '../../types';

export const contactAutoReplyTemplate = (
  formData: ContactFormData
): EmailTemplate => {
  const { name, email, service } = formData;
  const serviceDetails = getServiceDetails(service);
  const referenceId = generateReferenceId();

  return {
    to: email,
    from: 'hello@lenuv.io',
    subject: `Thanks for reaching out, ${name}! Your message has been received`,
    html: `
      <!DOCTYPE html>
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="x-apple-disable-message-reformatting">
        <title>Thank You for Your Message</title>
        
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
                ${createHeader('Message Received Successfully!', "I'll get back to you within 48 hours")}
                
                <!-- Content -->
                <tr>
                  <td class="email-content">
                    
                    <!-- Greeting -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td>
                          <p class="email-text">
                            Hi ${name},<br><br>
                            Thank you for reaching out! I've received your message about <strong>${serviceDetails.name}</strong> and I'm excited to learn more about your project.
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Alert Section -->
                    ${createAlert(
                      serviceDetails.icon,
                      'Your inquiry is important to me',
                      'I personally review every message and will respond with thoughtful insights tailored to your specific needs.'
                    )}
                    
                    <!-- Timeline Section -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-timeline">
                      <tr>
                        <td>
                          <h3 class="email-timeline-title">What happens next?</h3>
                          
                          <!-- Timeline Item 1 -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-timeline-item">
                            <tr>
                              <td style="width: 50px; vertical-align: top; padding-right: 15px;">
                                <div style="
                                  width: 40px; 
                                  height: 40px; 
                                  background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); 
                                  border-radius: 8px; 
                                  text-align: center;
                                  line-height: 40px;
                                  font-size: 18px;
                                ">📧</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p class="email-timeline-step">Message Review</p>
                                <p class="email-timeline-desc">I'll carefully review your requirements and project details</p>
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Timeline Item 2 -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-timeline-item">
                            <tr>
                              <td style="width: 50px; vertical-align: top; padding-right: 15px;">
                                <div style="
                                  width: 40px; 
                                  height: 40px; 
                                  background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); 
                                  border-radius: 8px; 
                                  text-align: center;
                                  line-height: 40px;
                                  font-size: 18px;
                                ">🤔</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p class="email-timeline-step">Solution Planning</p>
                                <p class="email-timeline-desc">I'll prepare initial thoughts and questions about your project</p>
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Timeline Item 3 -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-timeline-item">
                            <tr>
                              <td style="width: 50px; vertical-align: top; padding-right: 15px;">
                                <div style="
                                  width: 40px; 
                                  height: 40px; 
                                  background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); 
                                  border-radius: 8px; 
                                  text-align: center;
                                  line-height: 40px;
                                  font-size: 18px;
                                ">💬</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p class="email-timeline-step">Personal Response</p>
                                <p class="email-timeline-desc">You'll receive a detailed, personal response within 48 hours</p>
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Timeline Item 4 -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-timeline-item">
                            <tr>
                              <td style="width: 50px; vertical-align: top; padding-right: 15px;">
                                <div style="
                                  width: 40px; 
                                  height: 40px; 
                                  background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); 
                                  border-radius: 8px; 
                                  text-align: center;
                                  line-height: 40px;
                                  font-size: 18px;
                                ">🚀</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p class="email-timeline-step">Project Discussion</p>
                                <p class="email-timeline-desc">We'll schedule a call to dive deeper into your vision</p>
                              </td>
                            </tr>
                          </table>
                          
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Message Summary -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-details">
                      <tr>
                        <td colspan="2" style="padding: 20px 20px 10px 20px;">
                          <h3 style="color: #f1f5f9; font-size: 18px; font-weight: bold; margin: 0;">Your Message Summary</h3>
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
                      <tr>
                        <td class="email-detail-row">
                          <p class="email-detail-label">Reference:</p>
                          <p class="email-detail-value">${referenceId}</p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Call to Action -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 20px 0;">
                          <p class="email-text" style="text-align: center;">
                            In the meantime, feel free to explore my work and learn more about my approach to digital innovation.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-center">
                          ${createButton('Visit Portfolio', 'https://lenuv.io', 'primary')}
                          <br>
                          ${createButton('View Code', 'https://github.com/bradmccray89', 'primary')}
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
Hi ${name},

Thank you for reaching out about ${serviceDetails.name}! I've received your message and I'm excited to learn more about your project.

What happens next?
1. Message Review - I'll carefully review your requirements
2. Solution Planning - I'll prepare initial thoughts about your project  
3. Personal Response - You'll receive a detailed response within 48 hours
4. Project Discussion - We'll schedule a call to dive deeper

Your Message Summary:
- Service: ${serviceDetails.name}
- Submitted: ${formatDate()}
- Reference: ${referenceId}

I personally review every message and will respond with insights tailored to your specific needs.

Looking forward to building something amazing together!

Best regards,
Brandon McCray
Founder & Lead Developer, Lenuvio

Website: https://lenuv.io
Email: hello@lenuv.io
    `,
  };
};
