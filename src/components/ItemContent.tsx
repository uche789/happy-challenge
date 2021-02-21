import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { BookingData } from '../data';

function formatttedPrice(price: { currencyCode: string; value: number }) {
  return new Intl.NumberFormat('de', {
    currency: price.currencyCode,
    style: 'currency',
  }).format(price.value);
}

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface ItemContentProps {
  bookingData: BookingData;
  displayAdditional?: boolean;
}

const ItemContent: React.FC<ItemContentProps> = ({
  bookingData,
  displayAdditional = false,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  function getIcon(value: boolean) {
    if (value) {
      return <CheckCircleOutlineIcon fontSize="small" />;
    }
    return <HighlightOffIcon fontSize="small" />;
  }

  return (
    <CardContent>
      <img src={bookingData.vehicle.imageUrl} alt={bookingData.vehicle.name} />
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {bookingData.rateType}
      </Typography>
      <Typography variant="h5" component="h2">
        {bookingData.vehicle.name}
      </Typography>
      <Typography className={classes.pos} color="textSecondary" component="h3">
        {formatttedPrice(bookingData.price)}
      </Typography>
      <Typography variant="body2" component="p" align="left">
        <strong>{t('itemContent.category')}:</strong>{' '}
        {bookingData.vehicle.category}
      </Typography>
      <Typography variant="body2" component="p" align="left">
        <strong>{t('itemContent.gear')}:</strong> {bookingData.vehicle.gearType}
      </Typography>
      <Typography variant="body2" component="p" align="left">
        <strong>{t('itemContent.seats')}:</strong> {bookingData.vehicle.seats}
      </Typography>
      {displayAdditional && (
        <>
          <Typography variant="body2" component="p" align="left">
            <strong>{t('itemContent.doors')}:</strong>{' '}
            {bookingData.vehicle.doors}
          </Typography>
          <Typography variant="body2" component="p" align="left">
            <strong>{t('itemContent.hasAC')}:</strong>{' '}
            {getIcon(bookingData.vehicle.hasAC)}
          </Typography>
          <Typography variant="body2" component="p" align="left">
            <strong>{t('itemContent.hasSanitationGuarantee')}:</strong>{' '}
            {getIcon(bookingData.hasSanitationGuarantee)}
          </Typography>
          <hr />
          <Typography variant="h6">{t('itemContent.supplier')}</Typography>
          <img
            src={bookingData.supplier.logoUrl}
            alt={bookingData.supplier.name}
          />
          <Typography variant="body2" component="p" align="left">
            <strong>{t('itemContent.name')}:</strong>{' '}
            {bookingData.supplier.name}
          </Typography>
        </>
      )}
    </CardContent>
  );
};

export default ItemContent;
