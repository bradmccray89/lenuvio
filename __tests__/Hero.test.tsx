import { render, screen } from '@testing-library/react';
import { Hero } from '../app/components/hero/Hero';

describe('Hero', () => {
  it('renders the main hero title and subtitle', () => {
    render(<Hero />);
    expect(screen.getByText(/Building Tomorrow's/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Turning ambitious ideas into impactful products using AI, automation, and custom software./i
      )
    ).toBeInTheDocument();
  });

  it('renders all CTA buttons', () => {
    render(<Hero />);
    expect(
      screen.getByRole('button', { name: /Let's Build Something/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Learn More/i })
    ).toBeInTheDocument();
  });

  it('renders all differentiators', () => {
    render(<Hero />);
    expect(
      screen.getByText(/Build Fast. Iterate Faster./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Tech-Agnostic. Results-Obsessed./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/AI That Actually Works./i)).toBeInTheDocument();
  });

  it('renders at least one animated phrase (client only)', async () => {
    render(<Hero />);
    // Wait for one of the animated phrases to appear
    const possiblePhrases = [
      'Innovation',
      'Technology',
      'Excellence',
      'Vision',
    ];
    let found = false;
    for (const phrase of possiblePhrases) {
      try {
        await screen.findByText(
          (content) => content.includes(phrase),
          {},
          { timeout: 3000 }
        );
        found = true;
        break;
      } catch {
        // not found, try next
      }
    }
    expect(found).toBe(true);
  });
});
