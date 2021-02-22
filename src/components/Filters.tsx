import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FilterContext } from '../helpers/reducers/filters';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 600,
    margin: 'auto',
    padding: 10,
  },
  chip: {
    margin: 5,
  },
});

interface FilterChipProps {
  label: string;
  name: string;
}

const FilterChip: React.FC<FilterChipProps> = ({ label, name }) => {
  const { dispatch } = React.useContext(FilterContext);
  const classes = useStyles();

  const handleDelete = () => {
    dispatch({
      type: 'clear',
      payload: {
        name,
        filter: {},
      },
    });
  };
  return (
    <Chip className={classes.chip} label={label} onDelete={handleDelete} />
  );
};

const Filters: React.FC = () => {
  const { t } = useTranslation();
  const { state } = React.useContext(FilterContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {state.category && (
        <FilterChip
          label={`${t('filter.category')}: ${state.category}`}
          name="category"
        />
      )}
      {state.gearType && (
        <FilterChip
          label={`${t('filter.gearType')}: ${state.gearType}`}
          name="gearType"
        />
      )}
      {state.seats > 0 && (
        <FilterChip
          label={`${t('filter.seats')}: ${state.seats}`}
          name="seats"
        />
      )}
      {state.rateType && (
        <FilterChip
          label={`${t('filter.rateType')}: ${state.rateType}`}
          name="rateType"
        />
      )}
    </div>
  );
};

export default Filters;
