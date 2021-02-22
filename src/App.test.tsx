/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

test('renders filter link', () => {
  render(<App />);
  expect(screen.getByText(/filter/i)).toBeInTheDocument();
});
