import type { ButtonType } from '../types';

export const createButton = (
  text: string,
  href: string,
  type: ButtonType = 'primary'
): string => {
  const buttonClass =
    type === 'primary' ? 'email-button' : 'email-button email-button-secondary';

  return `
    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:42px;v-text-anchor:middle;width:200px;" arcsize="14%" stroke="f" fillcolor="${type === 'primary' ? '#06b6d4' : '#475569'}">
      <w:anchorlock/>
      <center style="color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">${text}</center>
    </v:roundrect>
    <![endif]-->
    <!--[if !mso]><!-->
    <a href="${href}" class="${buttonClass}" style="display: inline-block; padding: 14px 28px; background: ${type === 'primary' ? 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)' : '#475569'}; color: #ffffff !important; text-decoration: none !important; border-radius: 6px; font-weight: bold; font-size: 14px; text-align: center; margin: 10px 10px 10px 0; border: none;">${text}</a>
    <!--<![endif]-->
  `;
};
