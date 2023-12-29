import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect } from '@jest/globals';
import LineChart from '../components/Charts/line-chart';
import 'jest-canvas-mock';
import 'cross-fetch/polyfill';
import 'text-encoding';
import 'jest-localstorage-mock';

describe('Dashboard Component', () => {
  test('renders main content', () => {
    // TODO Implement testing for the whole page
    render(<LineChart />);

    // Assert if the page includes an H1 header
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});
