import { render } from '@testing-library/react';
import { Contact } from '../app/components/contact/Contact';
import { ToastProvider } from '../app/contexts/ToastContext';

describe('Contact', () => {
  it('renders without crashing', () => {
    render(
      <ToastProvider>
        <Contact />
      </ToastProvider>
    );
  });
});
