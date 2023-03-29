import React from 'react';
import { Card, CardHeader, CardContent, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';


const PaymentPage = () => {
    const navigate = useNavigate();

    const payButtonClick = (e) => {
        navigate('/payment/success');
      };

  return (
    <div className="payment-page">
      <Card variant="outlined">
        <CardHeader title="Payment Details" className="header" />
        <CardContent>
          <TextField
            id="card-holder-name"
            label="Card Holder Name"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            id="card-number"
            label="Card Number"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="exp-date"
                label="Expiration Date"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="cvv"
                label="CVV"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={payButtonClick} className="pay-button">
            Pay
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentPage;
