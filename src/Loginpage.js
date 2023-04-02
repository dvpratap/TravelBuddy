import React from 'react';
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
    marginBottom: 16,
    alignItems: 'center',
  },
  cardColor: {
    minWidth: 275,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conent: {
    alignItems: 'center',
    marginLeft: '75px',
  },
  image: {
    backgroundColor: '(255,255,255,0.5)',
  },
  login:{
    width: '60%',
    height: '400px',
    alignItems: 'center',
    marginLeft: '50px',
  }

});
const Loginpage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
     const RouteTo = () =>{
        navigate('/book_main');
    }
    const signupClick = () =>{
        navigate('/signup');
    }
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
            <Typography sx={{marginLeft: '60px'}} gutterBottom variant="h4" component="div">
            Travel-Buddy
          </Typography>
            </CardContent>
            </CardMedia>
            </Card>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
          <Card className={classes.login}>
          <form>
          <Typography variant="h4" gutterBottom sx={{marginBottom: '20px', marginLeft: '130px', marginTop:'20px'}}>
          Login
        </Typography>
          <div className='margin-top'>
          <TextField sx={{marginBottom: '20px', marginLeft: '70px'}}
            id="userName"
            label="UserName"
            defaultValue=""
            //value={email}
            //onChange={inputEmail}
          />
          </div>
          <div className='margin-top'>
          <TextField sx={{marginLeft: '70px'}}
            id="password"
            type='password'
            label="Password"
            //value={password}
            //onChange={inputPassword}
            defaultValue=""
          />
          </div>
          <Link href="/forgotpassword" sx={{marginLeft:'170px'}}>forgot password ?</Link>
          <div className='margin-top'>
          <Button sx={{marginLeft: '130px', marginTop:'30px'}} variant="contained" onClick={RouteTo}>LogIn</Button>
          </div>
          </form>
          <Button sx={{marginLeft: '90px', marginTop:'20px'}} variant="outlined" onClick={signupClick}>SignUp/Register</Button>
          </Card>
          </Card>
        </Grid>
      </Grid>
    );
}

export default Loginpage