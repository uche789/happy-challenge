/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  createStyles,
  Theme,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FilterContext } from '../helpers/reducers/filters';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: '100%',
    },
    actions: {
      marginTop: 10,
    },
  })
);

const FilterSearch: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = React.useContext(FilterContext);
  const [localState, setLocalState] = React.useState({ ...state });

  function handleChange(
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) {
    setLocalState((prevState) => {
      return { ...prevState, [event.target.name || '']: event.target.value };
    });
  }

  function addFilters() {
    dispatch({
      type: 'update',
      payload: {
        filter: localState,
      },
    });
    setOpen(false);
  }

  function handleClear() {
    dispatch({
      type: 'reset',
    });
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setLocalState({ ...state });
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen} startIcon={<FilterListIcon />}>
        {t('filter.filterBtn')}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="search-form">
        <DialogTitle id="search-form">{t('filter.filters')}</DialogTitle>
        <DialogContent>
          <FormControl className={classes.formControl}>
            <TextField
              autoFocus
              margin="dense"
              name="category"
              label={t('filter.category')}
              type="text"
              value={localState.category}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              name="rateType"
              label={t('filter.rateType')}
              type="text"
              value={localState.rateType}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              name="seats"
              label={t('filter.seats')}
              type="number"
              value={localState.seats}
              onChange={handleChange}
              fullWidth
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="gearType">{t('filter.gearType')}</InputLabel>
            <Select
              labelId="gearType"
              value={localState.gearType}
              name="gearType"
              onChange={handleChange}
              label="Age"
              fullWidth
            >
              <MenuItem value="">
                <em>{t('filter.none')}</em>
              </MenuItem>
              <MenuItem value="manual">{t('filter.manual')}</MenuItem>
              <MenuItem value="automatic">{t('filter.automatic')}</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose} color="primary">
            {t('filter.cancelBtn')}
          </Button>
          <Button onClick={handleClear} color="primary">
            {t('filter.clearBtn')}
          </Button>
          <Button onClick={addFilters} color="primary" variant="contained">
            {t('filter.confirmBtn')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FilterSearch;
