import React, { useContext,useState } from 'react';
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
import UserContext from './UserContext';

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
  error: {
    fontSize: 14,
    justifyContent: 'center',
    display: 'flex',
    color: 'red',
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
    justifyContent: 'center',
  },
  image: {
    backgroundColor: '(255,255,255,0.5)',
  },
  login:{
    height: '450px',
    minWidth: 275,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
const Loginpage = ({setIsLoggedIn}) => {
  let list = [
    { userName: 'Dev', password: 'Dev@1234' },
    { userName: 'Akash', password: 'Akash@1234' }
  ];
  const { setUser } = useContext(UserContext);
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [errors, setErrors] = useState({});
    const classes = useStyles();
    const navigate = useNavigate();
    const inputUserName = (e) =>{
      setUserName(e.target.value);
    }
    const inputPassword = (e) => {
      setPassword(e.target.value);
    }
    const validation = () => {
      let errors = {}
      if(userName===""){
          errors.userName = "userName is required!!"
      }
      if(password===""){
          errors.password="Password is required !";
          }
          return errors
    }
    const signupClick = () =>{
        navigate('/signup');
    }
    const loginClick = (event) =>{
      event.preventDefault(); 
      setErrors(validation(userName,password));
    if(Object.keys(errors).length === 0 && (userName && password)){
      const user = list.find(user=> (user.userName===userName) && (user.password === password))
      if(user){
      setIsLoggedIn(true);
      setUser(userName);
      navigate('/');
      }
      else{
        window.alert("Invalid Credentials");
      }
    }
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
          <Card className={classes.root} >
          <Card className={classes.login}>
          <form>
          <Typography variant="h4" gutterBottom sx={{marginBottom: '20px', marginLeft: '100px', marginTop:'20px'}}>
          Login
        </Typography>
          <div className='margin-top'>
          <TextField sx={{marginBottom: '10px', marginLeft: '20px'}}
            id="userName"
            label="UserName"
            defaultValue=""
            value={userName}
            onChange={inputUserName}
          />
          {errors.userName && <p className= {classes.error}>{errors.userName}</p>}
          </div>
          <div className='margin-top'>
          <TextField sx={{marginLeft:'20px'}}
            id="password"
            type='password'
            label="Password"
            value={password}
            onChange={inputPassword}
            defaultValue=""
          />
          {errors.password && <p className={classes.error}>{errors.password}</p>}
          </div>
          <Link href="/forgotpassword" sx={{marginLeft:'100px'}}>forgot password ?</Link>
          <div className='margin-top'>
          <Button sx={{marginLeft: '100px', marginTop:'30px'}} variant="contained" type='submit' onClick={loginClick}>LogIn</Button>
          </div>
          </form>
          <Button sx={{marginLeft: '60px', marginTop:'20px'}} variant="outlined" onClick={signupClick}>SignUp/Register</Button>
          </Card>
          </Card>
        </Grid>
      </Grid>
    );
}

export default Loginpage