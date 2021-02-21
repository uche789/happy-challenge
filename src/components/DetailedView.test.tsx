import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailedView from './DetailedView';
import data from '../data'

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

describe('DetailedView', () => {
  it('should have the Book button', () => {
    function mockHandler(value: boolean): void {}
    render(<DetailedView handleClose={mockHandler} />);
    expect(screen.getByText(/detailedView.title/i)).toBeInTheDocument();
  });
});
