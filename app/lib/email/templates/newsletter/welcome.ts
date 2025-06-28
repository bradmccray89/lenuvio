import { generateUnsubscribeToken } from '../../components/footer';
import { emailStyles } from '../../components/index';
import type { EmailTemplate } from '../../types';

export interface NewsletterData {
  email: string;
  name?: string;
}

export const newsletterWelcomeTemplate = (
  data: NewsletterData
): EmailTemplate => {
  const { email } = data;

  const unsubscribeToken = generateUnsubscribeToken(email);
  const unsubscribeUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://lenuv.io'}/api/unsubscribe?email=${encodeURIComponent(email)}&token=${encodeURIComponent(unsubscribeToken)}`;

  return {
    to: email,
    from: 'hello@lenuv.io',
    subject: `Welcome to Lenuvio Updates! 🚀`,
    html: `
      <!DOCTYPE html>
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="x-apple-disable-message-reformatting">
        <title>Welcome to Lenuvio Updates</title>
        
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
                    <h2 class="email-header-title" style="font-size: 22px; font-weight: bold; color: #ffffff; margin: 0 0 10px 0; font-family: Arial, Helvetica, sans-serif;">Welcome to the Journey!</h2>
                    <p class="email-header-subtitle" style="font-size: 16px; color: rgba(255, 255, 255, 0.9); margin: 0; font-family: Arial, Helvetica, sans-serif;">You're now part of the Lenuvio community</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td class="email-content" style="padding: 40px 30px; background-color: #1e293b;">
                    
                    <!-- Welcome Message -->
                    <p class="email-text" style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; font-family: Arial, Helvetica, sans-serif;">
                      Hi there,<br><br>
                      Welcome to Lenuvio Updates! We're excited to have you join our community of innovators, creators, and tech enthusiasts.
                    </p>
                    
                    <!-- What to Expect Alert -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="background-color: rgba(34, 211, 238, 0.1); border: 2px solid rgba(34, 211, 238, 0.3); border-radius: 8px; padding: 25px; margin: 30px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="width: 50px; vertical-align: top; padding-right: 15px;">
                                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); border-radius: 8px; text-align: center; line-height: 36px; font-size: 18px;">📧</div>
                              </td>
                              <td style="vertical-align: top;">
                                <h3 style="color: #f1f5f9; font-size: 18px; font-weight: bold; margin: 0 0 12px 0; font-family: Arial, Helvetica, sans-serif;">What to expect</h3>
                                <p style="color: #cbd5e1; font-size: 15px; margin: 0; line-height: 1.5; font-family: Arial, Helvetica, sans-serif;">You'll receive occasional updates about new projects, technical insights, and industry trends. No spam, just valuable content when we have something worth sharing.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Content Preview -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; margin: 30px 0; overflow: hidden;">
                          
                          <h3 style="color: #f1f5f9; font-size: 18px; font-weight: bold; margin: 0; padding: 25px 25px 10px 25px; font-family: Arial, Helvetica, sans-serif;">Coming Up</h3>
                          
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 18px 25px;">
                                <p style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">📚 Technical Deep Dives:</p>
                                <p style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">Behind-the-scenes looks at interesting development challenges and solutions</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 18px 25px;">
                                <p style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">🚀 Project Showcases:</p>
                                <p style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">Featured work and case studies from recent client projects</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 18px 25px;">
                                <p style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">💡 Industry Insights:</p>
                                <p style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">Thoughts on emerging technologies and development trends</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 18px 25px;">
                                <p style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0; font-family: Arial, Helvetica, sans-serif;">🛠️ Tools & Tips:</p>
                                <p style="color: #f1f5f9; font-size: 15px; margin: 0; font-family: Arial, Helvetica, sans-serif;">Useful resources, tools, and techniques we discover along the way</p>
                              </td>
                            </tr>
                          </table>
                          
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Call to Action -->
                    <p class="email-text" style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; text-align: center; font-family: Arial, Helvetica, sans-serif;">
                      While you're here, feel free to explore our latest work and get in touch if you have a project in mind.
                    </p>
                    
                    <div style="text-align: center; margin: 25px 0;">
                      <a href="https://lenuv.io" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); color: #ffffff !important; text-decoration: none !important; border-radius: 8px; font-weight: bold; font-size: 16px; text-align: center; margin: 15px 15px 15px 0; border: none; font-family: Arial, Helvetica, sans-serif;">View Portfolio</a>
                      
                      <br>
                      
                      <a href="https://lenuv.io#contact" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); color: #ffffff !important; text-decoration: none !important; border-radius: 8px; font-weight: bold; font-size: 16px; text-align: center; margin: 15px 15px 15px 0; border: none; font-family: Arial, Helvetica, sans-serif;">Start a Project</a>
                    </div>
                    
                    <!-- Personal Note -->
                    <p class="email-text" style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; font-family: Arial, Helvetica, sans-serif;">
                      Thanks for subscribing! We're looking forward to sharing this journey of continuous innovation and creative problem-solving with you.
                    </p>
                    <p class="email-text" style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; font-family: Arial, Helvetica, sans-serif;">
                      Best regards,<br>
                      <strong style="color: #f1f5f9;">The Lenuvio Team</strong>
                    </p>
                    
                  </td>
                </tr>
                
                <!-- Footer with Newsletter Unsubscribe -->
                <tr>
                  <td style="background-color: rgba(0, 0, 0, 0.4); padding: 30px 25px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                    
                    <p style="color: #94a3b8; font-size: 13px; margin: 0 0 20px 0; font-family: Arial, Helvetica, sans-serif;">You are receiving this because you subscribed to Lenuvio updates.</p>
                    
                    <div style="margin: 20px 0;">
                      <a href="https://lenuv.io" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">Website</a>
                      <a href="https://linkedin.com/company/lenuvio" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">LinkedIn</a>
                      <a href="https://github.com/bradmccray89" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">GitHub</a>
                      <a href="mailto:hello@lenuv.io" style="color: #06b6d4; text-decoration: none; font-size: 13px; margin: 0 12px; font-family: Arial, Helvetica, sans-serif;">Contact</a>
                    </div>
                    
                    <p style="color: #94a3b8; font-size: 13px; margin: 20px 0; font-family: Arial, Helvetica, sans-serif;">
                      <a href="${unsubscribeUrl}" style="color: #94a3b8 !important; text-decoration: none; font-family: Arial, Helvetica, sans-serif;">
                        Unsubscribe from these emails
                      </a>
                    </p>

                    <p style="color: #71717a; font-size: 12px; margin: 20px 0 0 0; font-family: Arial, Helvetica, sans-serif;">
                      Subscribed on ${new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    
                    <p style="color: #71717a; font-size: 12px; margin: 20px 0 0 0; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.05); font-family: Arial, Helvetica, sans-serif;">
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
Hi,

Welcome to Lenuvio Updates! We're excited to have you join our community.

What to expect:
- Technical deep dives and development insights
- Project showcases and case studies  
- Industry trends and emerging technologies
- Useful tools, tips, and resources

You'll receive occasional updates when we have something valuable to share - no spam, just quality content.

Thanks for subscribing! We're looking forward to sharing this journey with you.

Best regards,
The Lenuvio Team

Website: https://lenuv.io
Email: hello@lenuv.io

---
To unsubscribe from these emails, visit: ${unsubscribeUrl}
    `,
  };
};
