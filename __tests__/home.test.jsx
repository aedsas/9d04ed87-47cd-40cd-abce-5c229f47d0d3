import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';
import Home from '../app/page';

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

describe('Home Component', () => {
  test('renders main content', () => {
    render(<Home />);

    // Assert if the page includes an H1 header
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    // Assert the presence of key elements
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Hello and welcome')).toBeInTheDocument();
    expect(
      screen.getByText(/This tutorial will guide you through/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The selected tech includes some technologies/i)
    ).toBeInTheDocument();

    // Example: Assert that the Link component is present with the correct href
    const linkElement = screen.getByRole('link', {
      name: /click here to get started/i
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/login');
  });
});
