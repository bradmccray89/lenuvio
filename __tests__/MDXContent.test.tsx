import { render } from '@testing-library/react';
import { MDXContent } from '../app/components/blog/MDXContent';

describe('MDXContent', () => {
  it('renders without crashing (with minimal props)', () => {
    render(<MDXContent content={''} />);
  });
});
