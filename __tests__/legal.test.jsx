import React from 'react';
import { render } from '@testing-library/react';
import Legal from '../app/legal/page';

describe('Legal Component', () => {
  test('renders main content', () => {
    render(<Legal />);
  });
});
