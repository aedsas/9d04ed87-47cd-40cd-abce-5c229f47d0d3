import React from 'react';
import { render } from '@testing-library/react';
import Login from '../app/(auth)/login/page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return { prefetch: () => null };
  }
}));

describe('Login Component', () => {
  test('renders main content', () => {
    render(<Login />);
  });
});
