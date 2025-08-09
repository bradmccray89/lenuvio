import { render } from '@testing-library/react';
import { Services } from '../app/components/services/Services';

describe('Services', () => {
  it('renders without crashing', () => {
    render(<Services />);
  });
});
