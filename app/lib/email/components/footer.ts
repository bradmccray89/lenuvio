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
    <div class="footer" style="
      background: rgba(0, 0, 0, 0.3);
      padding: 25px 30px;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    ">
      <div style="
        color: #94a3b8;
        font-size: 0.8rem;
        margin-bottom: 15px;
      ">${footerText[type]}</div>
      
      <div style="
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-bottom: 15px;
      ">
        <a href="https://lenuv.io" style="color: #06b6d4; text-decoration: none; font-size: 0.8rem;">Website</a>
        <a href="https://linkedin.com/company/lenuvio" style="color: #06b6d4; text-decoration: none; font-size: 0.8rem;">LinkedIn</a>
        <a href="https://github.com/bradmccray89" style="color: #06b6d4; text-decoration: none; font-size: 0.8rem;">GitHub</a>
        <a href="mailto:hello@lenuv.io" style="color: #06b6d4; text-decoration: none; font-size: 0.8rem;">Contact</a>
      </div>
      
      <div style="
        color: #71717a;
        font-size: 0.75rem;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
      ">
        Email sent on ${new Date().toISOString()}
      </div>
    </div>
  `;
};
