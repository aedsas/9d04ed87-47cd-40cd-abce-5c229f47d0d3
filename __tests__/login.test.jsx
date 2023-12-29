import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe } from '@jest/globals';
import Login from '../app/(auth)/login/page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return { prefetch: () => null };
  }
}));

describe('Login Component', () => {
  test('renders Login component', () => {
    render(<Login />);

    // Assert if the page includes an H1 header
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    // Ensure that the component renders without errors
    expect(
      screen.getByText(/Please use your email and password to sign in/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });
});
