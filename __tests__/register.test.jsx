import React from 'react';
import { render } from '@testing-library/react';
import Register from '../app/(auth)/register/page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return { prefetch: () => null };
  }
}));

describe('Register Component', () => {
  test('renders main content', () => {
    render(<Register />);
  });
});
