import type { ServiceType, ServiceDetails } from '../types';

export const serviceMap: Record<ServiceType, string> = {
  'full-stack': 'Full-Stack Development',
  cloud: 'Cloud Solutions & DevOps',
  'ui-ux': 'UI/UX & Frontend Architecture',
  transformation: 'Digital Transformation',
  other: 'Other / Consultation',
  '': 'General Inquiry',
};

export const serviceIcons: Record<ServiceType, string> = {
  'full-stack': '🚀',
  cloud: '☁️',
  'ui-ux': '🎨',
  transformation: '⚡',
  other: '💡',
  '': '💡',
};

export const getServiceDetails = (
  serviceValue: ServiceType
): ServiceDetails => ({
  name: serviceMap[serviceValue] || 'General Inquiry',
  icon: serviceIcons[serviceValue] || '💡',
});
