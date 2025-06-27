import { emailStyles } from '../../components/index';
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
        <meta name="format-detection" content="telephone=no">
        <meta name="format-detection" content="date=no">
        <meta name="format-detection" content="address=no">
        <meta name="format-detection" content="email=no">
        <title>New Contact Form Submission</title>
        
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
                          <h2 class="email-header-title" style="font-size: 22px; font-weight: bold; color: #ffffff; margin: 0 0 10px 0; font-family: Arial, Helvetica, sans-serif;">New Contact Form Submission</h2>
                          <p class="email-header-subtitle" style="font-size: 16px; color: rgba(255, 255, 255, 0.9); margin: 0; font-family: Arial, Helvetica, sans-serif;">Someone is interested in your services</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td class="email-content" style="padding: 40px 30px; background-color: #1e293b;">
                    
                    <!-- Alert Section -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="background-color: rgba(34, 211, 238, 0.1); border: 2px solid rgba(34, 211, 238, 0.3); border-radius: 8px; padding: 25px; margin: 30px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="width: 50px; vertical-align: top; padding-right: 15px;">
                                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); border-radius: 8px; text-align: center; line-height: 36px; font-size: 18px;">${serviceDetails.icon}</div>
                              </td>
                              <td style="vertical-align: top;">
                                <h3 style="color: #f1f5f9; font-size: 18px; font-weight: bold; margin: 0 0 12px 0; font-family: Arial, Helvetica, sans-serif;">New Contact Form Submission</h3>
                                <p style="color: #cbd5e1; font-size: 15px; margin: 0; line-height: 1.5; font-family: Arial, Helvetica, sans-serif;">Someone is interested in ${serviceDetails.name}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Contact Details -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; margin: 30px 0; overflow: hidden;">
                          
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 25px 25px 10px 25px;">
                                <h3 style="color: #f1f5f9; font-size: 18px; font-weight: bold; margin: 0; font-family: Arial, Helvetica, sans-serif;">Contact Details</h3>
                              </td>
                            </tr>
                          </table>
                          
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 18px 25px;">
                                <p style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Name:</p>
                                <p style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">${name}</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 18px 25px;">
                                <p style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Email:</p>
                                <p style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">
                                  <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 18px 25px;">
                                <p style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Service:</p>
                                <p style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">${serviceDetails.icon} ${serviceDetails.name}</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 18px 25px;">
                                <p style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">Submitted:</p>
                                <p style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">${formatDate()}</p>
                              </td>
                            </tr>
                          </table>
                          
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Message Section -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 20px 0;">
                          <p style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0; font-family: Arial, Helvetica, sans-serif;">Message:</p>
                          <div style="background-color: rgba(0, 0, 0, 0.3); border-left: 4px solid #06b6d4; border-radius: 6px; padding: 20px; margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word; font-family: Arial, Helvetica, sans-serif;">${message}</div>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Action Buttons -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="text-align: center; margin: 25px 0;">
                          
                          <!--[if mso]>
                          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="mailto:${email}?subject=Re: Your inquiry about ${serviceDetails.name}&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out! I'd love to discuss your ${serviceDetails.name} needs.%0D%0A%0D%0ABest regards,%0D%0ABrandon" style="height:48px;v-text-anchor:middle;width:220px;" arcsize="17%" stroke="f" fillcolor="#06b6d4">
                            <w:anchorlock/>
                            <center style="color:#ffffff;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;">Reply to ${name}</center>
                          </v:roundrect>
                          <![endif]-->
                          <!--[if !mso]><!-->
                          <a href="mailto:${email}?subject=Re: Your inquiry about ${serviceDetails.name}&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out! I'd love to discuss your ${serviceDetails.name} needs.%0D%0A%0D%0ABest regards,%0D%0ABrandon" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); color: #ffffff !important; text-decoration: none !important; border-radius: 8px; font-weight: bold; font-size: 16px; text-align: center; margin: 15px 15px 15px 0; border: none; font-family: Arial, Helvetica, sans-serif;">Reply to ${name}</a>
                          <!--<![endif]-->
                          
                          <br>
                          
                          <!--[if mso]>
                          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://lenuv.io/admin" style="height:48px;v-text-anchor:middle;width:220px;" arcsize="17%" stroke="f" fillcolor="#475569">
                            <w:anchorlock/>
                            <center style="color:#ffffff;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;">View Dashboard</center>
                          </v:roundrect>
                          <![endif]-->
                          <!--[if !mso]><!-->
                          <a href="https://lenuv.io/admin" style="display: inline-block; padding: 16px 32px; background: #475569; color: #ffffff !important; text-decoration: none !important; border-radius: 8px; font-weight: bold; font-size: 16px; text-align: center; margin: 15px 15px 15px 0; border: none; font-family: Arial, Helvetica, sans-serif;">View Dashboard</a>
                          <!--<![endif]-->
                          
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: rgba(0, 0, 0, 0.4); padding: 30px 25px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                    
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="text-align: center;">
                          <p style="color: #94a3b8; font-size: 13px; margin: 0 0 20px 0; font-family: Arial, Helvetica, sans-serif;">This email was automatically generated from your Lenuvio contact form.</p>
                          
                          <div style="margin: 20px 0;">
                            <a href="https://lenuv.io" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">Website</a>
                            <a href="https://linkedin.com/company/lenuvio" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">LinkedIn</a>
                            <a href="https://github.com/bradmccray89" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">GitHub</a>
                            <a href="mailto:hello@lenuv.io" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">Contact</a>
                          </div>
                          
                          <p style="color: #71717a; font-size: 12px; margin: 20px 0 0 0; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.05); font-family: Arial, Helvetica, sans-serif;">
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
