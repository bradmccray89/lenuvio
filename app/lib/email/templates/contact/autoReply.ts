import { emailStyles } from '../../components/styles';
import { ContactFormData, EmailTemplate } from '../../types';
import {
  formatDate,
  generateReferenceId,
  getServiceDetails,
} from '../../utils';

// Updated autoReply template with cross-client compatibility
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
        <meta name="format-detection" content="telephone=no">
        <meta name="format-detection" content="date=no">
        <meta name="format-detection" content="address=no">
        <meta name="format-detection" content="email=no">
        <title>Thank You for Your Message</title>
        
        <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        
        <style>
          ${emailStyles}
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #0f172a; color: #e5e5e5; width: 100%; min-width: 100%;">
        
        <!-- Gmail fix -->
        <div style="display: none; max-height: 0; overflow: hidden;">
          &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>
        
        <!-- Wrapper Table -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-wrapper">
          <tr>
            <td align="center" style="padding: 20px 10px; background-color: #0f172a;">
              
              <!-- Main Container -->
              <!--[if mso]>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center">
              <tr>
              <td>
              <![endif]-->
              
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px;" class="email-container">
                
                <!-- Header -->
                <tr>
                  <td class="email-header" style="background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); padding: 40px 30px; text-align: center;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="text-align: center;">
                          <h1 class="email-logo" style="font-size: 32px; font-weight: bold; color: #ffffff; margin: 0 0 15px 0; font-family: Arial, Helvetica, sans-serif;">Lenuvio</h1>
                          <h2 class="email-header-title" style="font-size: 22px; font-weight: bold; color: #ffffff; margin: 0 0 10px 0; font-family: Arial, Helvetica, sans-serif;">Message Received Successfully!</h2>
                          <p class="email-header-subtitle" style="font-size: 16px; color: rgba(255, 255, 255, 0.9); margin: 0; font-family: Arial, Helvetica, sans-serif;">I'll get back to you within 48 hours</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td class="email-content" style="padding: 40px 30px; background-color: #1e293b;">
                    
                    <!-- Greeting -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td>
                          <p class="email-text" style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; font-family: Arial, Helvetica, sans-serif;">
                            Hi <strong style="color: #f1f5f9;">${name}</strong>,<br><br>
                            Thank you for reaching out! I've received your message about <strong style="color: #f1f5f9;">${serviceDetails.name}</strong> and I'm excited to learn more about your project.
                          </p>
                        </td>
                      </tr>
                    </table>
                    
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
                                <h3 class="email-alert-title" style="color: #f1f5f9; font-size: 18px; font-weight: bold; margin: 0 0 12px 0; font-family: Arial, Helvetica, sans-serif;">Your inquiry is important to me</h3>
                                <p class="email-alert-content" style="color: #cbd5e1; font-size: 15px; margin: 0; line-height: 1.5; font-family: Arial, Helvetica, sans-serif;">I personally review every message and will respond with thoughtful insights tailored to your specific needs.</p>
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
                          
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="text-align: center;">
                                <h3 class="email-timeline-title" style="color: #f1f5f9; font-size: 20px; font-weight: bold; margin: 0 0 25px 0; font-family: Arial, Helvetica, sans-serif;">What happens next?</h3>
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Timeline Item 1 -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 20px 0;">
                            <tr>
                              <td style="width: 60px; vertical-align: top; padding-right: 18px;">
                                <div class="email-timeline-icon" style="width: 44px; height: 44px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); border-radius: 10px; text-align: center; line-height: 44px; font-size: 20px;">📧</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p class="email-timeline-step" style="color: #f1f5f9; font-size: 16px; font-weight: bold; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Message Review</p>
                                <p class="email-timeline-desc" style="color: #cbd5e1; font-size: 14px; margin: 0; line-height: 1.5; font-family: Arial, Helvetica, sans-serif;">I'll carefully review your requirements and project details</p>
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Timeline Item 2 -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 20px 0;">
                            <tr>
                              <td style="width: 60px; vertical-align: top; padding-right: 18px;">
                                <div class="email-timeline-icon" style="width: 44px; height: 44px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); border-radius: 10px; text-align: center; line-height: 44px; font-size: 20px;">🤔</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p class="email-timeline-step" style="color: #f1f5f9; font-size: 16px; font-weight: bold; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Solution Planning</p>
                                <p class="email-timeline-desc" style="color: #cbd5e1; font-size: 14px; margin: 0; line-height: 1.5; font-family: Arial, Helvetica, sans-serif;">I'll prepare initial thoughts and questions about your project</p>
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Timeline Item 3 -->
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
                          
                          <!-- Timeline Item 4 -->
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
                    
                    <!-- Message Summary -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td class="email-details" style="background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; margin: 30px 0; overflow: hidden;">
                          
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 25px 25px 10px 25px;">
                                <h3 style="color: #f1f5f9; font-size: 18px; font-weight: bold; margin: 0; font-family: Arial, Helvetica, sans-serif;">Your Message Summary</h3>
                              </td>
                            </tr>
                          </table>
                          
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td class="email-detail-row" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 18px 25px;">
                                <p class="email-detail-label" style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Service:</p>
                                <p class="email-detail-value" style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">${serviceDetails.icon} ${serviceDetails.name}</p>
                              </td>
                            </tr>
                            <tr>
                              <td class="email-detail-row" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 18px 25px;">
                                <p class="email-detail-label" style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Submitted:</p>
                                <p class="email-detail-value" style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">${formatDate()}</p>
                              </td>
                            </tr>
                            <tr>
                              <td class="email-detail-row" style="padding: 18px 25px;">
                                <p class="email-detail-label" style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Reference:</p>
                                <p class="email-detail-value" style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">${referenceId}</p>
                              </td>
                            </tr>
                          </table>
                          
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Call to Action -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 20px 0;">
                          <p class="email-text" style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; text-align: center; font-family: Arial, Helvetica, sans-serif;">
                            In the meantime, feel free to explore my work and learn more about my approach to digital innovation.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-center" style="text-align: center; margin: 25px 0;">
                          
                          <!--[if mso]>
                          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://lenuv.io" style="height:48px;v-text-anchor:middle;width:200px;" arcsize="17%" stroke="f" fillcolor="#06b6d4">
                            <w:anchorlock/>
                            <center style="color:#ffffff;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;">Visit Portfolio</center>
                          </v:roundrect>
                          <![endif]-->
                          <!--[if !mso]><!-->
                          <a href="https://lenuv.io" class="email-button" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; text-align: center; margin: 15px 15px 15px 0; border: none; font-family: Arial, Helvetica, sans-serif;">Visit Portfolio</a>
                          <!--<![endif]-->
                          
                          <br>
                          
                          <!--[if mso]>
                          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://github.com/bradmccray89" style="height:48px;v-text-anchor:middle;width:200px;" arcsize="17%" stroke="f" fillcolor="#06b6d4">
                            <w:anchorlock/>
                            <center style="color:#ffffff;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;">View Code</center>
                          </v:roundrect>
                          <![endif]-->
                          <!--[if !mso]><!-->
                          <a href="https://github.com/bradmccray89" class="email-button" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; text-align: center; margin: 15px 15px 15px 0; border: none; font-family: Arial, Helvetica, sans-serif;">View Code</a>
                          <!--<![endif]-->
                          
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td class="email-footer" style="background-color: rgba(0, 0, 0, 0.4); padding: 30px 25px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                    
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="text-align: center;">
                          <p class="email-footer-text" style="color: #94a3b8; font-size: 13px; margin: 0 0 20px 0; font-family: Arial, Helvetica, sans-serif;">This email was automatically generated from your Lenuvio contact form.</p>
                          
                          <div class="email-footer-links" style="margin: 20px 0;">
                            <a href="https://lenuv.io" class="email-footer-link" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">Website</a>
                            <a href="https://linkedin.com/company/lenuvio" class="email-footer-link" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">LinkedIn</a>
                            <a href="https://github.com/bradmccray89" class="email-footer-link" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">GitHub</a>
                            <a href="mailto:hello@lenuv.io" class="email-footer-link" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">Contact</a>
                          </div>
                          
                          <p class="email-timestamp" style="color: #71717a; font-size: 12px; margin: 20px 0 0 0; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.05); font-family: Arial, Helvetica, sans-serif;">
                            Email sent on ${new Date().toLocaleDateString(
                              'en-US',
                              {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              }
                            )}
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
                
              </table>
              
              <!--[if mso]>
              </td>
              </tr>
              </table>
              <![endif]-->
              
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
