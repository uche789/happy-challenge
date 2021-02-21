import { CircularProgress, makeStyles } from '@material-ui/core';
import React, { Suspense } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Item from './components/Item';
import data from './data';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Suspense fallback={<CircularProgress />}>
        <Grid className={classes.root} container spacing={2}>
          {data.map((bookingData) => (
            <Grid key={bookingData.id} item>
              <Item bookingData={bookingData} />
            </Grid>
          ))}
        </Grid>
      </Suspense>
    </div>
  );
};

export default App;
