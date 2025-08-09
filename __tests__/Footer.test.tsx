import { render } from '@testing-library/react';
import { Footer } from '../app/components/footer/Footer';
import { ToastProvider } from '../app/contexts/ToastContext';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(
      <ToastProvider>
        <Footer />
      </ToastProvider>
    );
  });
});
