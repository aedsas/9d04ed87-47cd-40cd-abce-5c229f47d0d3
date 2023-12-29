import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe } from '@jest/globals';
import Legal from '../app/legal/page';

describe('Legal Component', () => {
  test('renders main content', () => {
    render(<Legal />);

    // Assert if the page includes an H1 header
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    // Assert that the Link component is present with the correct href
    const linkElement = screen.getByRole('link', {
      name: /go back/i
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', './dashboard');
  });
});
