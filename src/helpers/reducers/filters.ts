/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

export interface SearchFilter {
  rateType: string;
  gearType: 'manual' | 'automatic' | string;
  seats: number;
  category: string;
}

export const initialState: SearchFilter = {
  rateType: '',
  gearType: '',
  category: '',
  seats: 0,
};

export type FilterActionTypes = 'update' | 'clear' | 'reset';

export type FilterReducerAction = {
  type: FilterActionTypes;
  payload?: {
    name?: string;
    filter: Partial<SearchFilter>;
  };
};

const filterReducer = (
  state: SearchFilter,
  action: FilterReducerAction
): SearchFilter => {
  const payload = action.payload || {
    name: '',
    filter: {},
  };
  switch (action.type) {
    case 'update':
      return { ...state, ...payload.filter };
    case 'clear':
      return { ...state, [payload.name || '']: '' };
    case 'reset':
      return { ...initialState };
    default:
      throw new Error();
  }
};

export type FilterReducer = typeof filterReducer;
export default filterReducer;

export const FilterContext = React.createContext<{
  state: SearchFilter;
  dispatch: (action: FilterReducerAction) => void;
}>({
  state: initialState,
  dispatch: () => {},
});
