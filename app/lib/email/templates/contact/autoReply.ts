import { emailStyles } from '../../components/styles';
import { ContactFormData, EmailTemplate } from '../../types';
import {
  formatDate,
  generateReferenceId,
  getServiceDetails,
} from '../../utils';

// Updated autoReply template with personal references removed
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
        
        <style>
          ${emailStyles}
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #0f172a; color: #e5e5e5; width: 100%; min-width: 100%;">
        
        <!-- Main Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-wrapper">
          <tr>
            <td align="center" style="padding: 20px 10px; background-color: #0f172a;">
              
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px;" class="email-container">
                
                <!-- Header -->
                <tr>
                  <td class="email-header" style="background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); padding: 40px 30px; text-align: center;">
                    <h1 class="email-logo" style="font-size: 32px; font-weight: bold; color: #ffffff; margin: 0 0 15px 0; font-family: Arial, Helvetica, sans-serif;">Lenuvio</h1>
                    <h2 class="email-header-title" style="font-size: 22px; font-weight: bold; color: #ffffff; margin: 0 0 10px 0; font-family: Arial, Helvetica, sans-serif;">Message Received Successfully!</h2>
                    <p class="email-header-subtitle" style="font-size: 16px; color: rgba(255, 255, 255, 0.9); margin: 0; font-family: Arial, Helvetica, sans-serif;">We'll get back to you within 48 hours</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td class="email-content" style="padding: 40px 30px; background-color: #1e293b;">
                    
                    <!-- Greeting -->
                    <p class="email-text" style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; font-family: Arial, Helvetica, sans-serif;">
                      Hi <strong style="color: #f1f5f9;">${name}</strong>,<br><br>
                      Thank you for reaching out! We've received your message about <strong style="color: #f1f5f9;">${serviceDetails.name}</strong> and we're excited to learn more about your project.
                    </p>
                    
                    <!-- Alert Section -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td class="email-alert" style="background-color: rgba(34, 211, 238, 0.1); border: 2px solid rgba(34, 211, 238, 0.3); border-radius: 8px; padding: 25px; margin: 30px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="width: 50px; vertical-align: top; padding-right: 15px;">
                                <div class="email-alert-icon" style="width: 36px; height: 36px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); border-radius: 8px; text-align: center; line-height: 36px; font-size: 18px;">${serviceDetails.icon}</div>
                              </td>
                              <td style="vertical-align: top;">
                                <h3 class="email-alert-title" style="color: #f1f5f9; font-size: 18px; font-weight: bold; margin: 0 0 12px 0; font-family: Arial, Helvetica, sans-serif;">Your inquiry is important to us</h3>
                                <p class="email-alert-content" style="color: #cbd5e1; font-size: 15px; margin: 0; line-height: 1.5; font-family: Arial, Helvetica, sans-serif;">We personally review every message and will respond with thoughtful insights tailored to your specific needs.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Timeline Section -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td class="email-timeline" style="background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; margin: 30px 0; padding: 30px 25px;">
                          
                          <h3 class="email-timeline-title" style="color: #f1f5f9; font-size: 20px; font-weight: bold; margin: 0 0 25px 0; text-align: center; font-family: Arial, Helvetica, sans-serif;">What happens next?</h3>
                          
                          <!-- Timeline Items -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 20px 0;">
                            <tr>
                              <td style="width: 60px; vertical-align: top; padding-right: 18px;">
                                <div class="email-timeline-icon" style="width: 44px; height: 44px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); border-radius: 10px; text-align: center; line-height: 44px; font-size: 20px;">📧</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p class="email-timeline-step" style="color: #f1f5f9; font-size: 16px; font-weight: bold; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Message Review</p>
                                <p class="email-timeline-desc" style="color: #cbd5e1; font-size: 14px; margin: 0; line-height: 1.5; font-family: Arial, Helvetica, sans-serif;">We'll carefully review your requirements and project details</p>
                              </td>
                            </tr>
                          </table>
                          
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 20px 0;">
                            <tr>
                              <td style="width: 60px; vertical-align: top; padding-right: 18px;">
                                <div class="email-timeline-icon" style="width: 44px; height: 44px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); border-radius: 10px; text-align: center; line-height: 44px; font-size: 20px;">💬</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p class="email-timeline-step" style="color: #f1f5f9; font-size: 16px; font-weight: bold; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Personal Response</p>
                                <p class="email-timeline-desc" style="color: #cbd5e1; font-size: 14px; margin: 0; line-height: 1.5; font-family: Arial, Helvetica, sans-serif;">You'll receive a detailed, personal response within 48 hours</p>
                              </td>
                            </tr>
                          </table>
                          
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="padding: 20px 0 0 0;">
                            <tr>
                              <td style="width: 60px; vertical-align: top; padding-right: 18px;">
                                <div class="email-timeline-icon" style="width: 44px; height: 44px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); border-radius: 10px; text-align: center; line-height: 44px; font-size: 20px;">🚀</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p class="email-timeline-step" style="color: #f1f5f9; font-size: 16px; font-weight: bold; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Project Discussion</p>
                                <p class="email-timeline-desc" style="color: #cbd5e1; font-size: 14px; margin: 0; line-height: 1.5; font-family: Arial, Helvetica, sans-serif;">We'll schedule a call to dive deeper into your vision</p>
                              </td>
                            </tr>
                          </table>
                          
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Personal Note -->
                    <p class="email-text" style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; font-family: Arial, Helvetica, sans-serif;">
                      Thanks for reaching out! We're looking forward to building something amazing together.
                    </p>
                    <p class="email-text" style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; font-family: Arial, Helvetica, sans-serif;">
                      Best regards,<br>
                      <strong style="color: #f1f5f9;">The Lenuvio Team</strong>
                    </p>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td class="email-footer" style="background-color: rgba(0, 0, 0, 0.4); padding: 30px 25px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                    <p class="email-footer-text" style="color: #94a3b8; font-size: 13px; margin: 0 0 20px 0; font-family: Arial, Helvetica, sans-serif;">This email was automatically generated from your Lenuvio contact form.</p>
                    
                    <div class="email-footer-links" style="margin: 20px 0;">
                      <a href="https://lenuv.io" class="email-footer-link" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">Website</a>
                      <a href="https://linkedin.com/company/lenuvio" class="email-footer-link" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">LinkedIn</a>
                      <a href="https://github.com/bradmccray89" class="email-footer-link" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">GitHub</a>
                      <a href="mailto:hello@lenuv.io" class="email-footer-link" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">Contact</a>
                    </div>
                    
                    <p class="email-timestamp" style="color: #71717a; font-size: 12px; margin: 20px 0 0 0; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.05); font-family: Arial, Helvetica, sans-serif;">
                      Email sent on ${new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </td>
                </tr>
                
              </table>
              
            </td>
          </tr>
        </table>
        
      </body>
      </html>
    `,
    text: `
Hi ${name},

Thank you for reaching out about ${serviceDetails.name}! We've received your message and we're excited to learn more about your project.

What happens next?
1. Message Review - We'll carefully review your requirements
2. Personal Response - You'll receive a detailed response within 48 hours
3. Project Discussion - We'll schedule a call to dive deeper

Your Message Summary:
- Service: ${serviceDetails.name}
- Submitted: ${formatDate()}
- Reference: ${referenceId}

We personally review every message and will respond with insights tailored to your specific needs.

Looking forward to building something amazing together!

Best regards,
The Lenuvio Team

Website: https://lenuv.io
Email: hello@lenuv.io
    `,
  };
};
