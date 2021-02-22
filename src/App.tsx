import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import './App.css';
import Item from './components/Item';
import FilterSearch from './components/FilterSearch';
import Filters from './components/Filters';
import rawData, { BookingData } from './data';
import filterReducer, {
  initialState,
  FilterContext,
} from './helpers/reducers/filters';
import filterData from './helpers/filterData';

const useStyles = makeStyles({
  grid: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    margin: 10,
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [state, dispatch] = React.useReducer(filterReducer, initialState);
  const [data, setData] = React.useState<BookingData[]>(rawData);
  React.useEffect(() => {
    setData(filterData(rawData, state));
  }, [state]);

  return (
    <div className="App">
      <Container>
        <Typography className={classes.title} variant="h3" component="h4">
          {t('title')}
        </Typography>
        <FilterContext.Provider value={{ state, dispatch }}>
          <FilterSearch />
          <Filters />
        </FilterContext.Provider>
        <Grid className={classes.grid} container spacing={2}>
          {data.map((bookingData) => (
            <Grid key={bookingData.id} item>
              <Item bookingData={bookingData} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
