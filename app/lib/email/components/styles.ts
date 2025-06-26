export const emailStyles = `
  /* Reset styles for email clients */
  body, table, td, p, a, li, blockquote {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  
  table, td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
  }
  
  img {
    -ms-interpolation-mode: bicubic;
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none;
  }
  
  /* Base styles */
  body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #0f172a;
    color: #e5e5e5;
    line-height: 1.6;
    width: 100% !important;
    min-width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Container styles */
  .email-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #1e293b;
    border-radius: 8px;
    overflow: hidden;
  }
  
  /* Header styles */
  .email-header {
    background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
    padding: 30px 20px;
    text-align: center;
  }
  
  .email-logo {
    font-size: 28px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 0 10px 0;
    text-decoration: none;
  }
  
  .email-header-title {
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 0 8px 0;
  }
  
  .email-header-subtitle {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }
  
  /* Content styles */
  .email-content {
    padding: 30px 20px;
    background-color: #1e293b;
  }
  
  .email-text {
    color: #e2e8f0;
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 20px 0;
  }
  
  .email-text strong {
    color: #f1f5f9;
  }
  
  /* Alert box */
  .email-alert {
    background-color: rgba(34, 211, 238, 0.1);
    border: 2px solid rgba(34, 211, 238, 0.3);
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
  }
  
  .email-alert-content {
    color: #cbd5e1;
    font-size: 14px;
    margin: 0;
  }
  
  .email-alert-title {
    color: #f1f5f9;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 8px 0;
  }
  
  /* Details section */
  .email-details {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin: 20px 0;
    overflow: hidden;
  }
  
  .email-detail-row {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 12px 20px;
  }
  
  .email-detail-row:last-child {
    border-bottom: none;
  }
  
  .email-detail-label {
    color: #94a3b8;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 4px 0;
  }
  
  .email-detail-value {
    color: #f1f5f9;
    font-size: 14px;
    margin: 0;
    word-wrap: break-word;
  }
  
  /* Timeline styles */
  .email-timeline {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin: 20px 0;
    padding: 20px;
  }
  
  .email-timeline-title {
    color: #f1f5f9;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 0 0 20px 0;
  }
  
  .email-timeline-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 15px 0;
  }
  
  .email-timeline-item:last-child {
    border-bottom: none;
  }
  
  .email-timeline-step {
    color: #f1f5f9;
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 4px 0;
  }
  
  .email-timeline-desc {
    color: #cbd5e1;
    font-size: 13px;
    margin: 0;
    line-height: 1.4;
  }
  
  /* Button styles */
  .email-button {
    display: inline-block;
    padding: 14px 28px;
    background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
    color: #ffffff !important;
    text-decoration: none !important;
    border-radius: 6px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    margin: 10px 10px 10px 0;
    border: none;
  }
  
  .email-button-secondary {
    background: #475569 !important;
    color: #e2e8f0 !important;
  }
  
  .email-button:hover {
    opacity: 0.9;
  }
  
  /* Footer styles */
  .email-footer {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .email-footer-text {
    color: #94a3b8;
    font-size: 12px;
    margin: 0 0 15px 0;
    line-height: 1.4;
  }
  
  .email-footer-links {
    margin: 15px 0;
  }
  
  .email-footer-link {
    color: #06b6d4 !important;
    text-decoration: none !important;
    font-size: 12px;
    margin: 0 10px;
  }
  
  .email-footer-link:hover {
    text-decoration: underline !important;
  }
  
  .email-timestamp {
    color: #71717a;
    font-size: 11px;
    margin: 15px 0 0 0;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  /* Message content */
  .email-message {
    background-color: rgba(0, 0, 0, 0.2);
    border-left: 4px solid #06b6d4;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0;
    color: #e2e8f0;
    font-size: 14px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  
  /* Center alignment for buttons */
  .email-center {
    text-align: center;
    margin: 20px 0;
  }
  
  /* Mobile responsive */
  @media only screen and (max-width: 600px) {
    .email-container {
      width: 100% !important;
      margin: 0 !important;
      border-radius: 0 !important;
    }
    
    .email-content {
      padding: 20px 15px !important;
    }
    
    .email-header {
      padding: 20px 15px !important;
    }
    
    .email-button {
      display: block !important;
      width: 100% !important;
      margin: 10px 0 !important;
      box-sizing: border-box;
    }
    
    .email-logo {
      font-size: 24px !important;
    }
    
    .email-header-title {
      font-size: 18px !important;
    }
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .email-container {
      background-color: #1e293b !important;
    }
    
    .email-content {
      background-color: #1e293b !important;
    }
  }
  
  /* Outlook specific fixes */
  /*[if mso]>
  <style type="text/css">
    .email-button {
      border: none !important;
      padding: 14px 28px !important;
      mso-padding-alt: 0;
    }
    
    .email-container {
      background-color: #1e293b !important;
    }
  </style>
  <![endif]*/
`;
