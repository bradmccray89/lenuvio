export const emailStyles = `
  /* Reset styles for maximum compatibility */
  body, table, td, p, a, li, blockquote {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    margin: 0;
    padding: 0;
  }
  
  table, td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    border-collapse: collapse;
  }
  
  img {
    -ms-interpolation-mode: bicubic;
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none;
    display: block;
  }
  
  /* Base body styles with Gmail fixes */
  body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: Arial, Helvetica, sans-serif !important;
    background-color: #0f172a !important;
    color: #e5e5e5 !important;
    line-height: 1.6 !important;
    width: 100% !important;
    min-width: 100% !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Gmail fix: prevent auto-resizing */
  .gmail-fix {
    display: none;
    display: none !important;
  }
  
  /* Wrapper table for centering */
  .email-wrapper {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    background-color: #0f172a !important;
  }
  
  /* Main container with proper centering */
  .email-container {
    width: 100% !important;
    max-width: 600px !important;
    margin: 0 auto !important;
    background-color: #1e293b !important;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #334155;
  }
  
  /* Header styles with better spacing */
  .email-header {
    background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%) !important;
    padding: 40px 30px !important;
    text-align: center !important;
  }
  
  .email-logo {
    font-size: 32px !important;
    font-weight: bold !important;
    color: #ffffff !important;
    margin: 0 0 15px 0 !important;
    text-decoration: none !important;
    line-height: 1.2 !important;
    display: block !important;
  }
  
  .email-header-title {
    font-size: 22px !important;
    font-weight: bold !important;
    color: #ffffff !important;
    margin: 0 0 10px 0 !important;
    line-height: 1.3 !important;
  }
  
  .email-header-subtitle {
    font-size: 16px !important;
    color: rgba(255, 255, 255, 0.9) !important;
    margin: 0 !important;
    line-height: 1.4 !important;
  }
  
  /* Content area with proper spacing */
  .email-content {
    padding: 40px 30px !important;
    background-color: #1e293b !important;
  }
  
  /* Text elements with consistent spacing */
  .email-text {
    color: #e2e8f0 !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
    margin: 0 0 25px 0 !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  .email-text strong {
    color: #f1f5f9 !important;
    font-weight: bold !important;
  }
  
  /* Alert box with Gmail-compatible styling */
  .email-alert {
    background-color: rgba(34, 211, 238, 0.1) !important;
    border: 2px solid rgba(34, 211, 238, 0.3) !important;
    border-radius: 8px !important;
    padding: 25px !important;
    margin: 30px 0 !important;
  }
  
  .email-alert-content {
    color: #cbd5e1 !important;
    font-size: 15px !important;
    margin: 0 !important;
    line-height: 1.5 !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  .email-alert-title {
    color: #f1f5f9 !important;
    font-size: 18px !important;
    font-weight: bold !important;
    margin: 0 0 12px 0 !important;
    line-height: 1.3 !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  /* Icon container for alerts */
  .email-alert-icon {
    width: 36px !important;
    height: 36px !important;
    background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%) !important;
    border-radius: 8px !important;
    display: inline-block !important;
    text-align: center !important;
    line-height: 36px !important;
    font-size: 18px !important;
    vertical-align: top !important;
    margin-right: 15px !important;
  }
  
  /* Details section with better structure */
  .email-details {
    background-color: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 8px !important;
    margin: 30px 0 !important;
    overflow: hidden !important;
  }
  
  .email-detail-row {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
    padding: 18px 25px !important;
  }
  
  .email-detail-row:last-child {
    border-bottom: none !important;
  }
  
  .email-detail-label {
    color: #94a3b8 !important;
    font-size: 13px !important;
    font-weight: bold !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    margin: 0 0 6px 0 !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  .email-detail-value {
    color: #f1f5f9 !important;
    font-size: 15px !important;
    margin: 0 !important;
    word-wrap: break-word !important;
    line-height: 1.4 !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  /* Timeline with proper spacing */
  .email-timeline {
    background-color: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 8px !important;
    margin: 30px 0 !important;
    padding: 30px 25px !important;
  }
  
  .email-timeline-title {
    color: #f1f5f9 !important;
    font-size: 20px !important;
    font-weight: bold !important;
    text-align: center !important;
    margin: 0 0 25px 0 !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  .email-timeline-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
    padding: 20px 0 !important;
  }
  
  .email-timeline-item:last-child {
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }
  
  .email-timeline-step {
    color: #f1f5f9 !important;
    font-size: 16px !important;
    font-weight: bold !important;
    margin: 0 0 6px 0 !important;
    line-height: 1.3 !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  .email-timeline-desc {
    color: #cbd5e1 !important;
    font-size: 14px !important;
    margin: 0 !important;
    line-height: 1.5 !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  .email-timeline-icon {
    width: 44px !important;
    height: 44px !important;
    background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%) !important;
    border-radius: 10px !important;
    text-align: center !important;
    line-height: 44px !important;
    font-size: 20px !important;
    display: inline-block !important;
    vertical-align: top !important;
    margin-right: 18px !important;
  }
  
  /* Button styles with better compatibility */
  .email-button {
    display: inline-block !important;
    padding: 16px 32px !important;
    background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%) !important;
    color: #ffffff !important;
    text-decoration: none !important;
    border-radius: 8px !important;
    font-weight: bold !important;
    font-size: 16px !important;
    text-align: center !important;
    margin: 15px 15px 15px 0 !important;
    border: none !important;
    font-family: Arial, Helvetica, sans-serif !important;
    line-height: 1.2 !important;
    mso-hide: none !important;
  }
  
  .email-button-secondary {
    background: #475569 !important;
    color: #e2e8f0 !important;
  }
  
  .email-button:hover {
    opacity: 0.9 !important;
  }
  
  /* Center alignment helper */
  .email-center {
    text-align: center !important;
    margin: 25px 0 !important;
  }
  
  /* Footer with proper spacing */
  .email-footer {
    background-color: rgba(0, 0, 0, 0.4) !important;
    padding: 30px 25px !important;
    text-align: center !important;
    border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
  }
  
  .email-footer-text {
    color: #94a3b8 !important;
    font-size: 13px !important;
    margin: 0 0 20px 0 !important;
    line-height: 1.5 !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  .email-footer-links {
    margin: 20px 0 !important;
  }
  
  .email-footer-link {
    color: #06b6d4 !important;
    text-decoration: none !important;
    font-size: 13px !important;
    margin: 0 12px !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  .email-footer-link:hover {
    text-decoration: underline !important;
  }
  
  .email-timestamp {
    color: #71717a !important;
    font-size: 12px !important;
    margin: 20px 0 0 0 !important;
    padding-top: 20px !important;
    border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  /* Message content styling */
  .email-message {
    background-color: rgba(0, 0, 0, 0.3) !important;
    border-left: 4px solid #06b6d4 !important;
    border-radius: 6px !important;
    padding: 20px !important;
    margin: 25px 0 !important;
    color: #e2e8f0 !important;
    font-size: 15px !important;
    line-height: 1.6 !important;
    white-space: pre-wrap !important;
    word-wrap: break-word !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
  
  /* Spacing utilities */
  .email-spacer {
    height: 20px !important;
    line-height: 20px !important;
    font-size: 1px !important;
  }
  
  .email-spacer-large {
    height: 40px !important;
    line-height: 40px !important;
    font-size: 1px !important;
  }
  
  /* Mobile responsive styles */
  @media only screen and (max-width: 600px) {
    .email-container {
      width: 100% !important;
      margin: 0 !important;
      border-radius: 0 !important;
      border-left: none !important;
      border-right: none !important;
    }
    
    .email-content {
      padding: 25px 20px !important;
    }
    
    .email-header {
      padding: 30px 20px !important;
    }
    
    .email-footer {
      padding: 25px 20px !important;
    }
    
    .email-button {
      display: block !important;
      width: auto !important;
      margin: 15px 0 !important;
      padding: 18px 24px !important;
    }
    
    .email-logo {
      font-size: 28px !important;
    }
    
    .email-header-title {
      font-size: 20px !important;
    }
    
    .email-header-subtitle {
      font-size: 15px !important;
    }
    
    .email-text {
      font-size: 15px !important;
    }
    
    .email-alert {
      padding: 20px !important;
      margin: 25px 0 !important;
    }
    
    .email-timeline {
      padding: 25px 20px !important;
    }
    
    .email-detail-row {
      padding: 15px 20px !important;
    }
    
    .email-alert-icon {
      width: 32px !important;
      height: 32px !important;
      line-height: 32px !important;
      font-size: 16px !important;
      margin-right: 12px !important;
    }
    
    .email-timeline-icon {
      width: 40px !important;
      height: 40px !important;
      line-height: 40px !important;
      font-size: 18px !important;
      margin-right: 15px !important;
    }
  }
  
  /* Outlook specific fixes */
  /*[if mso]>
  <style type="text/css">
    .email-container {
      width: 600px !important;
    }
    
    .email-button {
      border: none !important;
      padding: 16px 32px !important;
      mso-padding-alt: 0;
      mso-text-raise: 4px;
    }
    
    .email-content {
      padding: 40px 30px !important;
    }
    
    .email-header {
      padding: 40px 30px !important;
    }
    
    .email-footer {
      padding: 30px 25px !important;
    }
    
    .email-text {
      mso-line-height-rule: exactly;
      line-height: 1.6 !important;
    }
    
    table {
      border-collapse: collapse !important;
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }
  </style>
  <![endif]*/
  
  /* Gmail specific fixes */
  @media screen and (min-width: 600px) {
    .email-container {
      margin: 20px auto !important;
    }
  }
  
  /* Dark mode compatibility */
  @media (prefers-color-scheme: dark) {
    .email-container {
      background-color: #1e293b !important;
    }
    
    .email-content {
      background-color: #1e293b !important;
    }
    
    .email-footer {
      background-color: rgba(0, 0, 0, 0.4) !important;
    }
  }
  
  /* Prevent Gmail from changing font sizes */
  u + .email-wrapper .email-text {
    font-size: 16px !important;
  }
  
  /* Fix for Yahoo Mail */
  .yahoo-fix {
    width: 100% !important;
    min-width: 100% !important;
  }
`;
