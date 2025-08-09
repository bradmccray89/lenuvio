import { render } from '@testing-library/react';
import { About } from '../app/components/about/About';

describe('About', () => {
  it('renders without crashing', () => {
    render(<About />);
  });
});
