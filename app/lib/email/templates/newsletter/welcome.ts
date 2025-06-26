// app/lib/email/templates/newsletter/welcome.ts
import { generateUnsubscribeToken } from '../../components/footer';
import {
  emailStyles,
  createHeader,
  createFooter,
  createButton,
  createAlert,
} from '../../components/index';
import type { EmailTemplate } from '../../types';

export interface NewsletterData {
  email: string;
  name?: string;
}

export const newsletterWelcomeTemplate = (
  data: NewsletterData
): EmailTemplate => {
  const { email, name } = data;
  const displayName = name || 'there';

  const unsubscribeToken = generateUnsubscribeToken(email);
  const unsubscribeUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://lenuv.io'}/api/unsubscribe?email=${encodeURIComponent(email)}&token=${encodeURIComponent(unsubscribeToken)}`;

  return {
    to: email,
    from: 'hello@lenuv.io',
    subject: `Welcome to Lenuvio Updates, ${displayName}! 🚀`,
    html: `
      <!DOCTYPE html>
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Welcome to Lenuvio Updates</title>
        <style>
          ${emailStyles}
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #0f172a; color: #e5e5e5; line-height: 1.6; width: 100%; min-width: 100%;">
        
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #0f172a;">
          <tr>
            <td align="center" style="padding: 20px 0;">
              
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="email-container" style="max-width: 600px; background-color: #1e293b; border-radius: 8px; overflow: hidden;">
                
                <!-- Header -->
                ${createHeader('Welcome to the Journey!', "You're now part of the Lenuvio community")}
                
                <!-- Content -->
                <tr>
                  <td class="email-content">
                    
                    <!-- Welcome Message -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td>
                          <p class="email-text">
                            Hi ${displayName},<br><br>
                            Welcome to Lenuvio Updates! I'm excited to have you join our community of innovators, creators, and tech enthusiasts.
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- What to Expect -->
                    ${createAlert(
                      '📧',
                      'What to expect',
                      "You'll receive occasional updates about new projects, technical insights, and industry trends. No spam, just valuable content when I have something worth sharing."
                    )}
                    
                    <!-- Content Preview -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-details">
                      <tr>
                        <td colspan="2" style="padding: 20px 20px 10px 20px;">
                          <h3 style="color: #f1f5f9; font-size: 18px; font-weight: bold; margin: 0;">Coming Up</h3>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-detail-row">
                          <p class="email-detail-label">📚 Technical Deep Dives:</p>
                          <p class="email-detail-value">Behind-the-scenes looks at interesting development challenges and solutions</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-detail-row">
                          <p class="email-detail-label">🚀 Project Showcases:</p>
                          <p class="email-detail-value">Featured work and case studies from recent client projects</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-detail-row">
                          <p class="email-detail-label">💡 Industry Insights:</p>
                          <p class="email-detail-value">Thoughts on emerging technologies and development trends</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-detail-row">
                          <p class="email-detail-label">🛠️ Tools & Tips:</p>
                          <p class="email-detail-value">Useful resources, tools, and techniques I discover along the way</p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Call to Action -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 20px 0;">
                          <p class="email-text" style="text-align: center;">
                            While you're here, feel free to explore my latest work and get in touch if you have a project in mind.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-center">
                          ${createButton('View Portfolio', 'https://lenuv.io', 'primary')}
                          <br>
                          ${createButton('Start a Project', 'https://lenuv.io#contact', 'primary')}
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Personal Note -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 20px 0;">
                          <p class="email-text">
                            Thanks for subscribing! I'm looking forward to sharing this journey of continuous innovation and creative problem-solving with you.
                          </p>
                          <p class="email-text">
                            Best regards,<br>
                            <strong>Brandon McCray</strong><br>
                            Founder & Lead Developer, Lenuvio
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
                
                <!-- Footer with Unsubscribe -->
                ${createFooter('newsletter')}
                
              </table>
              
            </td>
          </tr>
        </table>
        
      </body>
      </html>
    `,
    text: `
Hi ${displayName},

Welcome to Lenuvio Updates! I'm excited to have you join our community.

What to expect:
- Technical deep dives and development insights
- Project showcases and case studies  
- Industry trends and emerging technologies
- Useful tools, tips, and resources

You'll receive occasional updates when I have something valuable to share - no spam, just quality content.

Thanks for subscribing! I'm looking forward to sharing this journey with you.

Best regards,
Brandon McCray
Founder & Lead Developer, Lenuvio

Website: https://lenuv.io
Email: hello@lenuv.io

---
To unsubscribe from these emails, visit: ${unsubscribeUrl}
    `,
  };
};
