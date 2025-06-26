import type { FooterType } from '../types';

export const createFooter = (type: FooterType = 'default'): string => {
  const footerText: Record<FooterType, string> = {
    contact:
      'This email was automatically generated from your Lenuvio contact form.',
    newsletter:
      'You are receiving this because you subscribed to Lenuvio updates.',
    project: 'This is a project-related notification from Lenuvio.',
    default: 'This email was sent by Lenuvio.',
  };

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
