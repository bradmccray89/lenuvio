import { render } from '@testing-library/react';
import { Navigation } from '../app/components/navigation/Navigation';

describe('Navigation', () => {
  it('renders without crashing', () => {
    render(<Navigation />);
  });
});
