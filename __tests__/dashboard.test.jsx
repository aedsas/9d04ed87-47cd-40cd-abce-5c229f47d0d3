import React from 'react';
import { render } from '@testing-library/react';
import { describe } from '@jest/globals';
import Dashboard from '../app/(authorized)/dashboard/page';
import { LanguageProvider } from '../context/LanguageContext';
import { ReduxProvider } from '../context/ReduxProvider';
import 'jest-canvas-mock';
import 'cross-fetch/polyfill';
import 'text-encoding';

describe('Dashboard Component', () => {
  test('renders main content', () => {
    render(
      <LanguageProvider>
        <ReduxProvider>
          <Dashboard />
        </ReduxProvider>
      </LanguageProvider>
    );
  });
});
