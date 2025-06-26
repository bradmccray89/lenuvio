/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ValidationResult } from '../types';
import { escapeHtml } from './formatters';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateFormData = (
  data: Record<string, any>,
  requiredFields: string[] = []
): ValidationResult => {
  const errors: string[] = [];

  for (const field of requiredFields) {
    if (!data[field] || String(data[field]).trim() === '') {
      errors.push(`${field} is required`);
    }
  }

  if (data.email && !validateEmail(data.email)) {
    errors.push('Invalid email address');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const sanitizeData = <T extends Record<string, any>>(data: T): T => {
  const sanitized = {} as T;

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      (sanitized as any)[key] = escapeHtml(value.trim());
    } else {
      (sanitized as any)[key] = value;
    }
  }

  return sanitized;
};
