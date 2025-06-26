export const createHeader = (
  title?: string,
  subtitle: string = "Building Tomorrow's Digital Experiences"
): string => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
      <td class="email-header">
        <h1 class="email-logo">Lenuvio</h1>
        ${title ? `<h2 class="email-header-title">${title}</h2>` : ''}
        <p class="email-header-subtitle">${subtitle}</p>
      </td>
    </tr>
  </table>
`;
