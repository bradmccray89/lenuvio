import type { ButtonType } from '../types';

export const createButton = (
  text: string,
  href: string,
  type: ButtonType = 'primary'
): string => `
  <a href="${href}" class="btn btn-${type}" style="
    display: inline-block;
    padding: 12px 24px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    text-align: center;
    margin: 5px;
    ${
      type === 'primary'
        ? 'background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); color: white; border: 1px solid rgba(34, 211, 238, 0.3);'
        : 'background: rgba(30, 41, 59, 0.6); color: #e2e8f0; border: 1px solid rgba(71, 85, 105, 0.5);'
    }
  ">${text}</a>
`;
