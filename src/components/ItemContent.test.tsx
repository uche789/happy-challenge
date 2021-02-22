import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemContent from './ItemContent';
import data from '../data';

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

describe('ItemContent', () => {
  it('should display additional information', () => {
    render(<ItemContent bookingData={data[0]} displayAdditional />);
    expect(
      screen.queryByText('itemContent.hasSanitationGuarantee')
    ).toBeInTheDocument();
  });

  it('should not display additional information', () => {
    render(<ItemContent bookingData={data[0]} />);
    expect(
      screen.queryByText('itemContent.hasSanitationGuarantee')
    ).not.toBeInTheDocument();
  });
});
