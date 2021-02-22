import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { TFunction, useTranslation } from 'react-i18next';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PersonIcon from '@material-ui/icons/Person';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import WorkIcon from '@material-ui/icons/Work';
import { BookingData } from '../data';

function formatttedPrice(price: { currencyCode: string; value: number }) {
  return new Intl.NumberFormat('de', {
    currency: price.currencyCode,
    style: 'currency',
  }).format(price.value);
}

function getBagText(
  t: TFunction<string>,
  bags: {
    min: number | null;
    max: number | null;
  }
) {
  if (!bags) return '';

  if (bags.min && !bags.max) {
    return t('itemContent.bagsMin', {
      text: bags.min,
    });
  }
  if (!bags.min && bags.max) {
    return t('itemContent.bagsMax', {
      text: bags.max,
    });
  }

  const text = bags.min === bags.max ? bags.min : `${bags.min}-${bags.max}`;
  return t('itemContent.bags', {
    text,
  });
}

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  supplierSection: {
    display: 'flex',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  supplierImage: {
    maxWidth: 150,
  },
});

interface ItemContentProps {
  bookingData: BookingData;
  displayAdditional?: boolean;
}

const IconText: React.FC = ({ children }) => {
  return (
    <Box display="flex" alignItems="center" paddingRight={2}>
      {children}
    </Box>
  );
};

const ItemContent: React.FC<ItemContentProps> = ({
  bookingData,
  displayAdditional = false,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <CardContent>
      <Box textAlign="center">
        <img
          src={bookingData.vehicle.imageUrl}
          alt={bookingData.vehicle.name}
        />
      </Box>
      <Typography
        className={classes.title}
        color="textSecondary"
        gutterBottom
        align="center"
      >
        {bookingData.rateType}
      </Typography>
      <Typography variant="h5" component="h2" align="center">
        {bookingData.vehicle.name}
      </Typography>
      <Typography
        className={classes.pos}
        color="textSecondary"
        component="h3"
        align="center"
      >
        {formatttedPrice(bookingData.price)}
      </Typography>
      <Typography variant="body2" component="p" align="left">
        <strong>{t('itemContent.category')}:</strong>{' '}
        {bookingData.vehicle.category}
      </Typography>
      <Typography variant="body2" component="p" align="left">
        <strong>{t('itemContent.gear')}:</strong> {bookingData.vehicle.gearType}
      </Typography>
      <Box display="flex" flexWrap="wrap" alignItems="center" marginTop={1}>
        <IconText>
          <PersonIcon />{' '}
          {t('itemContent.seats', {
            count: bookingData.vehicle.seats,
          })}
        </IconText>
        {displayAdditional && (
          <>
            <IconText>
              <MeetingRoomIcon /> {bookingData.vehicle.doors}{' '}
              {t('itemContent.doors')}
            </IconText>
            {bookingData.vehicle.hasAC && (
              <IconText>
                <AcUnitIcon />
                {t('itemContent.hasAC')}
              </IconText>
            )}
            {bookingData.hasSanitationGuarantee && (
              <IconText>
                <CheckCircleOutlineIcon />
                {t('itemContent.hasSanitationGuarantee')}
              </IconText>
            )}
            {getBagText(t, bookingData.vehicle.bags) && (
              <IconText>
                <WorkIcon />
                {getBagText(t, bookingData.vehicle.bags)}
              </IconText>
            )}
          </>
        )}
      </Box>
      {displayAdditional && (
        <>
          <hr />
          <Box className={classes.supplierSection}>
            <Typography variant="h6">{t('itemContent.supplier')}</Typography>
            <img
              className={classes.supplierImage}
              src={bookingData.supplier.logoUrl}
              alt={bookingData.supplier.name}
            />
          </Box>
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
