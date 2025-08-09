import { render } from '@testing-library/react';
import { Button } from '../app/components/ui/Button';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Test</Button>);
  });
});
