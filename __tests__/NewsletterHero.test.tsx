import { render } from '@testing-library/react';
import { NewsletterHero } from '../app/components/newsletter/NewsletterHero';
import { ToastProvider } from '../app/contexts/ToastContext';

describe('NewsletterHero', () => {
  it('renders without crashing', () => {
    render(
      <ToastProvider>
        <NewsletterHero />
      </ToastProvider>
    );
  });
});
