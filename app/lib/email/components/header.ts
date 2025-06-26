export const createHeader = (
  title?: string,
  subtitle: string = "Building Tomorrow's Digital Experiences"
): string => `
  <div class="header" style="
    background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
    padding: 30px;
    text-align: center;
    position: relative;
  ">
    <div style="
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    "></div>
    <div style="
      font-size: 1.8rem;
      font-weight: 800;
      color: white;
      margin-bottom: 8px;
      position: relative;
      z-index: 1;
    ">Lenuvio</div>
    ${
      title
        ? `<div style="
      font-size: 1.2rem;
      font-weight: 600;
      color: white;
      margin-bottom: 8px;
      position: relative;
      z-index: 1;
    ">${title}</div>`
        : ''
    }
    <div style="
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.9rem;
      position: relative;
      z-index: 1;
    ">${subtitle}</div>
  </div>
`;
