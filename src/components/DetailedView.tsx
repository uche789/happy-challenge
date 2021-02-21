import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTranslation } from 'react-i18next';

interface DetailedViewProps {
  handleClose(value: boolean): void;
}

const DetailedView: React.FC<DetailedViewProps> = ({
  handleClose,
  children,
}) => {
  const { t } = useTranslation();
  const handleClickClose = () => {
    handleClose(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClickClose}
        aria-labelledby="customized-dialog-title"
        open
      >
        <DialogTitle id="customized-dialog-title">
          {t('detailedView.title')}
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClickClose} color="primary">
            {t('detailedView.btn')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DetailedView;
