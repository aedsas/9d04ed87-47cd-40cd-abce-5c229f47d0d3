import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from '../app/(auth)/register/page';
import { expect } from '@jest/globals';

jest.mock('next/navigation', () => ({
  useRouter() {
    return { prefetch: () => null };
  }
}));

describe('Register Component', () => {
  test('renders main content', () => {
    render(<Register />);

    // Assert if the page includes an H1 header
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    // Ensure that the component renders without errors
    expect(
      screen.getByText(/Create an account with your email and password/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});
