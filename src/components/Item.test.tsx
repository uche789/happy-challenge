import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';
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

describe('Item', () => {
  it('should have the Book button', () => {
    render(<Item bookingData={data[0]} />);
    expect(screen.getByText(/Book/i)).toBeInTheDocument();
  });

  it('should have vehicle data', () => {
    render(<Item bookingData={data[0]} />);
    expect(screen.getByText(data[0].vehicle.name)).toBeInTheDocument();
    expect(screen.getByText(data[0].vehicle.seats)).toBeInTheDocument();
    expect(screen.getByText(data[0].vehicle.category)).toBeInTheDocument();
  });
});
