// lib/email/templates/contact/autoReply.ts
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
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Message</title>
        <style>${emailStyles}</style>
      </head>
      <body>
        <div class="container">
          ${createHeader('Message Received Successfully!', "I'll get back to you within 48 hours")}
          
          <div class="content">
            <div style="
              font-size: 1.1rem;
              color: #f1f5f9;
              margin-bottom: 25px;
              line-height: 1.7;
            ">
              Hi ${name},<br><br>
              Thank you for reaching out! I've received your message about <strong>${serviceDetails.name}</strong> and I'm excited to learn more about your project.
            </div>
            
            ${createAlert(
              serviceDetails.icon,
              'Your inquiry is important to me',
              'I personally review every message and will respond with thoughtful insights tailored to your specific needs.'
            )}
            
            <div style="
              background: rgba(255, 255, 255, 0.02);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              padding: 25px;
              margin: 30px 0;
            ">
              <div style="
                font-size: 1.1rem;
                font-weight: 600;
                color: #f1f5f9;
                margin-bottom: 20px;
                text-align: center;
              ">What happens next?</div>
              
              <div style="display: flex; align-items: center; gap: 15px; padding: 15px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <div style="
                  width: 40px; height: 40px;
                  background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 18px;
                  flex-shrink: 0;
                ">📧</div>
                <div style="flex: 1;">
                  <div style="font-weight: 600; color: #f1f5f9; font-size: 0.9rem; margin-bottom: 3px;">Message Review</div>
                  <div style="color: #cbd5e1; font-size: 0.85rem;">I'll carefully review your requirements and project details</div>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; gap: 15px; padding: 15px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <div style="
                  width: 40px; height: 40px;
                  background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 18px;
                  flex-shrink: 0;
                ">🤔</div>
                <div style="flex: 1;">
                  <div style="font-weight: 600; color: #f1f5f9; font-size: 0.9rem; margin-bottom: 3px;">Solution Planning</div>
                  <div style="color: #cbd5e1; font-size: 0.85rem;">I'll prepare initial thoughts and questions about your project</div>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; gap: 15px; padding: 15px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <div style="
                  width: 40px; height: 40px;
                  background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 18px;
                  flex-shrink: 0;
                ">💬</div>
                <div style="flex: 1;">
                  <div style="font-weight: 600; color: #f1f5f9; font-size: 0.9rem; margin-bottom: 3px;">Personal Response</div>
                  <div style="color: #cbd5e1; font-size: 0.85rem;">You'll receive a detailed, personal response within 48 hours</div>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; gap: 15px; padding: 15px 0;">
                <div style="
                  width: 40px; height: 40px;
                  background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 18px;
                  flex-shrink: 0;
                ">🚀</div>
                <div style="flex: 1;">
                  <div style="font-weight: 600; color: #f1f5f9; font-size: 0.9rem; margin-bottom: 3px;">Project Discussion</div>
                  <div style="color: #cbd5e1; font-size: 0.85rem;">We'll schedule a call to dive deeper into your vision</div>
                </div>
              </div>
            </div>
            
            <div style="
              background: rgba(255, 255, 255, 0.02);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              padding: 25px;
              margin: 30px 0;
            ">
              <div style="
                font-size: 1.1rem;
                font-weight: 600;
                color: #f1f5f9;
                margin-bottom: 15px;
              ">Your Message Summary</div>
              <div style="display: flex; padding: 8px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <div style="font-weight: 600; color: #94a3b8; min-width: 100px; font-size: 0.85rem;">Service:</div>
                <div style="color: #e2e8f0; flex: 1;">${serviceDetails.icon} ${serviceDetails.name}</div>
              </div>
              <div style="display: flex; padding: 8px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <div style="font-weight: 600; color: #94a3b8; min-width: 100px; font-size: 0.85rem;">Submitted:</div>
                <div style="color: #e2e8f0; flex: 1;">${formatDate()}</div>
              </div>
              <div style="display: flex; padding: 8px 0;">
                <div style="font-weight: 600; color: #94a3b8; min-width: 100px; font-size: 0.85rem;">Reference:</div>
                <div style="color: #e2e8f0; flex: 1;">${referenceId}</div>
              </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <div style="color: #cbd5e1; margin-bottom: 20px; font-size: 0.95rem;">
                In the meantime, feel free to explore my work and learn more about my approach to digital innovation.
              </div>
              ${createButton('Visit Portfolio', 'https://lenuv.io', 'primary')}
              ${createButton('View Code', 'https://github.com/bradmccray89', 'primary')}
            </div>
          </div>
          
          ${createFooter('contact')}
        </div>
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
