import type { DateFormatOptions } from '../types';

export const formatDate = (
  date: Date = new Date(),
  options: DateFormatOptions = {}
): string => {
  const defaultOptions: DateFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  };

  return date.toLocaleDateString('en-US', { ...defaultOptions, ...options });
};

export const formatEmailSubject = (
  template: string,
  data: Record<string, string | number>
): string => {
  return template.replace(
    /\{(\w+)\}/g,
    (match, key) => String(data[key]) || match
  );
};

export const generateReferenceId = (): string => {
  return `#${Date.now().toString().slice(-6)}`;
};

export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};
