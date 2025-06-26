import type { FooterType } from '../types';
import { formatDate } from '../utils';

export const createFooter = (
  type: FooterType = 'default',
  email: string = ''
): string => {
  const footerText: Record<FooterType, string> = {
    contact:
      'This email was automatically generated from your Lenuvio contact form.',
    newsletter:
      'You are receiving this because you subscribed to Lenuvio updates.',
    project: 'This is a project-related notification from Lenuvio.',
    default: 'This email was sent by Lenuvio.',
  };

  const unsubscribeToken = generateUnsubscribeToken(email);
  const unsubscribeUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://lenuv.io'}/api/unsubscribe?email=${encodeURIComponent(email)}&token=${encodeURIComponent(unsubscribeToken)}`;

  // Only show links and unsubscribe for newsletter emails
  const showNewsletterExtras = type === 'newsletter';

  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
      <tr>
        <td class="email-footer">
          <p class="email-footer-text">${footerText[type]}</p>
          
          <div class="email-footer-links">
            <a href="https://lenuv.io" class="email-footer-link">Website</a>
            <a href="https://linkedin.com/company/lenuvio" class="email-footer-link">LinkedIn</a>
            <a href="https://github.com/bradmccray89" class="email-footer-link">GitHub</a>
            <a href="mailto:hello@lenuv.io" class="email-footer-link">Contact</a>
          </div>
          
          ${
            showNewsletterExtras
              ? `
          <p class="email-footer-text" style="margin: 20px 0;">
            <a href="${unsubscribeUrl}" class="email-footer-link" style="color: #94a3b8 !important;">
              Unsubscribe from these emails
            </a>
          </p>

          <p class="email-timestamp">
            Subscribed on ${formatDate()}
          </p>
              `
              : ''
          }
          

          <p class="email-timestamp">
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
  `;
};

// Generate unsubscribe token (same function as in API route)
export function generateUnsubscribeToken(email: string): string {
  const secret = process.env.UNSUBSCRIBE_SECRET || 'your-secret-key';
  return Buffer.from(`${email}-${secret}`).toString('base64');
}
