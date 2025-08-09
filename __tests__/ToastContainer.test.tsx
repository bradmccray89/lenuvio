import { render } from '@testing-library/react';
import ToastContainer from '../app/components/toast/ToastContainer';

describe('ToastContainer', () => {
  it('renders without crashing (with empty toasts)', () => {
    render(<ToastContainer toasts={[]} onClose={() => {}} />);
  });
});
