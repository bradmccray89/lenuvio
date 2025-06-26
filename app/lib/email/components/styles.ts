export const emailStyles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
    color: #e5e5e5;
    line-height: 1.6;
    padding: 20px;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(15, 23, 42, 0.95);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .content { padding: 30px; }
  .alert {
    background: rgba(34, 211, 238, 0.1);
    border: 1px solid rgba(34, 211, 238, 0.3);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .alert-icon {
    font-size: 24px;
    background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
    width: 48px; height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    text-align: center;
  }
  .btn-primary {
    background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
    color: white;
    border: 1px solid rgba(34, 211, 238, 0.3);
  }
  .btn-secondary {
    background: rgba(30, 41, 59, 0.6);
    color: #e2e8f0;
    border: 1px solid rgba(71, 85, 105, 0.5);
  }
  @media (max-width: 600px) {
    body { padding: 10px; }
    .content { padding: 20px; }
    .btn { width: 100%; margin-bottom: 10px; }
  }
`;
