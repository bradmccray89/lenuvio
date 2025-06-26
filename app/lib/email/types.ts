// lib/email/types.ts - TypeScript type definitions

export interface EmailTemplate {
  to: string | string[];
  from: string;
  subject: string;
  html: string;
  text: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: ServiceType;
  message: string;
}

export type ServiceType =
  | 'full-stack'
  | 'cloud'
  | 'ui-ux'
  | 'transformation'
  | 'other'
  | '';

export interface ServiceDetails {
  name: string;
  icon: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface EmailSendResult {
  success: boolean;
  message: string;
  notificationId?: string;
  autoReplyId?: string;
}

export interface DateFormatOptions {
  weekday?: 'narrow' | 'short' | 'long';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'short' | 'long';
}

export type ButtonType = 'primary' | 'secondary';
export type AlertType = 'info' | 'success' | 'warning' | 'error';
export type FooterType = 'contact' | 'newsletter' | 'project' | 'default';

export interface NewsletterData {
  name: string;
  email: string;
  subscriptionDate?: Date;
  preferences?: string[];
}

export interface ProjectData {
  clientName: string;
  clientEmail: string;
  title: string;
  description: string;
  status: 'proposal' | 'in-progress' | 'completed';
  milestone?: string;
  deadline?: Date;
}

export interface AdminAlertData {
  type: 'error' | 'warning' | 'info';
  message: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

// Template function types
export type ContactNotificationTemplate = (
  data: ContactFormData
) => EmailTemplate;
export type ContactAutoReplyTemplate = (data: ContactFormData) => EmailTemplate;
export type NewsletterWelcomeTemplate = (data: NewsletterData) => EmailTemplate;
export type ProjectProposalTemplate = (data: ProjectData) => EmailTemplate;
export type AdminSystemAlertTemplate = (data: AdminAlertData) => EmailTemplate;

// Template registry types
export interface TemplateRegistry {
  contact: {
    notification: ContactNotificationTemplate;
    autoReply: ContactAutoReplyTemplate;
  };
  newsletter?: {
    welcome: NewsletterWelcomeTemplate;
  };
  project?: {
    proposal: ProjectProposalTemplate;
  };
  admin?: {
    systemAlert: AdminSystemAlertTemplate;
  };
}

export type TemplateType = keyof TemplateRegistry;
export type TemplateSubtype<T extends TemplateType> = keyof TemplateRegistry[T];

// Component prop types
export interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export interface ButtonProps {
  text: string;
  href: string;
  type?: ButtonType;
}

export interface AlertProps {
  icon: string;
  title: string;
  message: string;
  type?: AlertType;
}

export interface FooterProps {
  type?: FooterType;
}
