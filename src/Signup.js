import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E9967A',
  
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      alignItems: 'center',
    },
    cardColor: {
      minWidth: 275,
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    error: {
      fontSize: 11,
      justifyContent: 'center',
      display: 'flex',
      color: 'red',
    },
    conent: {
      alignItems: 'center',
      marginLeft: '75px',
    },
    image: {
      backgroundColor: '(255,255,255,0.5)',
    },
    signup:{
      minWidth: 350,
      minHeight: 530,
      alignItems: 'center',
      justifyContent: 'center',
    }
  
  });
const SignUp = () => {
    const navigate=useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors,setErrors] = useState({});

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const Validation = () => {
    let errors={};
    if(!firstName){
        errors.firstName="First Name is required !";
    }else if(!/^[a-z ]*[A-Z ]*$/i.test(firstName)){
        errors.firstName="Only Letters Allowed !";
    }
    if(!lastName){
        errors.lastName="Last Name is required !";
    }else if(!/^[a-z ]*[A-Z ]*$/i.test(lastName)){
        errors.lastName="Only Letters Allowed !";
    }
    if(!email){
        errors.email="Email is required !";
    }else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Invalid Email !!";
    }
    if(!password){
        errors.password="Password is required !";
    }else if(!/^[ A-Za-z0-9_@./#&+-]{8,}$/i.test(password)){
        errors.password="Password must be > 8 characters..";
    }
    return errors;
}


  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation());
    if(Object.keys(errors).length === 0 && (firstName && lastName && email && password)){
      navigate('/login');
  }

    // Send form data to the server for processing
  };
const classes = useStyles();

  return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.cardColor}>
              <Card sx={{maxWidth: 400 }}>
              <CardMedia>
              <CardMedia
                      component="img"
                      height="280"
                      image={require('./Images/carpool-final.png')}
                      alt='carpool'
                      className={classes.image}
                    />
                <CardContent>
                <Typography sx={{marginLeft: '60px'}} gutterBottom variant="h5" component="div">
                Travel-Buddy
              </Typography>
                </CardContent>
                </CardMedia>
                </Card>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.root}>
              <Card className={classes.signup}>
        <div>
        <h2 style={{marginLeft: '120px'}}>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
        <div >
          <TextField sx={{marginLeft: '70px'}}
            type="text"
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            margin="normal"
          />
          {errors.firstName && <p className={classes.error}>{errors.firstName}</p>}
          </div>
          <div>
          <TextField sx={{marginLeft: '70px'}}
            type="text"
            label="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            required
            margin="normal"
          />
          {errors.lastName && <p className={classes.error}>{errors.lastName}</p>}
          </div>
          <div>
          <TextField sx={{marginLeft: '70px'}}
            type="email"
            label="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errors.email && <p className={classes.error}>{errors.email}</p>}
          </div>
          <div>
          <TextField sx={{marginLeft: '70px'}}
            type="password"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            margin="normal"
          />
          {errors.password && <p className={classes.error}>{errors.password}</p>}
          </div>
          <div>
          <Button sx={{marginLeft: '130px', marginTop:'10px', marginBottom: '2px'}} 
          onClick={handleFormSubmit}
          variant="contained" color="primary">
            Sign Up
          </Button>
          </div>
          <Link style={{marginLeft: '70px'}} href="/login">Already have an account? Log in</Link>
        </form>
        </div>
        </Card>
        </Card>
        </Grid>
        </Grid>
      );
    };

export default SignUp;
