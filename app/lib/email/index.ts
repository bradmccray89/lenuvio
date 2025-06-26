// lib/email/index.ts - Fixed main export file

// Export all types
export type * from './types';

// Export contact templates
export { contactNotificationTemplate } from './templates/contact/notification';
export { contactAutoReplyTemplate } from './templates/contact/autoReply';

// Export all components
export * from './components/index';

// Export all utils
export * from './utils/index';

// Import what we need for the factory function
import type { ContactFormData, EmailTemplate } from './types';

import { contactNotificationTemplate } from './templates/contact/notification';
import { contactAutoReplyTemplate } from './templates/contact/autoReply';

// Simple template factory function
export function createContactEmail(
  type: 'notification' | 'autoReply',
  data: ContactFormData
): EmailTemplate {
  switch (type) {
    case 'notification':
      return contactNotificationTemplate(data);
    case 'autoReply':
      return contactAutoReplyTemplate(data);
    default:
      throw new Error(`Unknown contact email type: ${type}`);
  }
}

// Convenience object for direct template access
export const emailTemplates = {
  contactNotification: contactNotificationTemplate,
  contactAutoReply: contactAutoReplyTemplate,
} as const;
