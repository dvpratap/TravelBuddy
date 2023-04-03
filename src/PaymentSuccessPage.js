import React from 'react';
import { Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Link } from 'react-router-dom';
import '../src/css/PaymentSuccessPage.css';


const PaymentSuccessPage = () => {
  return (
    <div className="success-page">
      <CheckCircleOutlineIcon className="icon" />
      <Typography variant="h5" className="title">
        Payment Successful!
      </Typography>
      <Typography variant="body1" className="message">
        Thank you for your payment. Your transaction has been completed successfully.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/" className="btn">
        Back to Home
      </Button>
    </div>
  );
};

export default PaymentSuccessPage;
