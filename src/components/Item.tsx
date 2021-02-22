import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { BookingData } from '../data';
import DetailedView from './DetailedView';
import ItemContent from './ItemContent';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  details: {
    minWidth: 300,
    boxShadow: 'none',
  },
  actions: {
    justifyContent: 'flex-end',
  },
});

interface ItemProps {
  bookingData: BookingData;
}

const Item: React.FC<ItemProps> = ({ bookingData }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [viewDetails, setViewDetails] = React.useState(false);

  function handleShowDetails() {
    handleModalVisibility(true);
  }

  function handleModalVisibility(value: boolean): void {
    setViewDetails(value);
  }

  function goTo() {
    window.location.href = bookingData.bookingFormUrl;
  }

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <ItemContent bookingData={bookingData} />
        <CardActions className={classes.actions}>
          <Button size="small" onClick={handleShowDetails}>
            {t('item.detailsBtn')}
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={goTo}
          >
            {t('item.bookBtn')}
          </Button>
        </CardActions>
      </Card>
      {viewDetails && (
        <DetailedView handleClose={handleModalVisibility}>
          <Card className={classes.details}>
            <ItemContent bookingData={bookingData} displayAdditional />
          </Card>
        </DetailedView>
      )}
    </>
  );
};

export default Item;
