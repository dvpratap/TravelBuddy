import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: '130vh',
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
      height: '130vh',
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
    signup:{
      minWidth: 350,
      height: '700px',
      alignItems: 'center',
      justifyContent: 'center',
    }
  
  });
const Postride = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    window.alert("Your Ride Posted Successfully");
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
                      image={require('./Images/postride.png')}
                      alt='carpool'
                      className={classes.image}
                    />
                <CardContent>
                <Typography sx={{marginLeft: '60px'}} gutterBottom variant="h4" component="div">
                Post Your Ride Here !!
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
        <h1 style={{marginLeft: '120px'}}>Post Ride</h1>
        <form onSubmit={handleFormSubmit}>
        <div >
          <TextField sx={{marginLeft: '70px'}}
            type="text"
            label="Enter Driver's Name"
            required
            margin="normal"
          />
          </div>
          <div>
          <TextField sx={{marginLeft: '70px'}}
            type="email"
            label="Email Address"
            required
            margin="normal"
          />
          </div>
          <div>
          <TextField sx={{marginLeft: '70px'}}
            type="phone"
            label="Contact Number"
            required
            margin="normal"
          />
          </div>
          <div>
          <TextField sx={{marginLeft: '70px'}}
            type="text"
            label="Enter Starting Point"
            required
            margin="normal"
          />
          </div>
          <div>
          <TextField sx={{marginLeft: '70px'}}
            type="text"
            label="Enter Destination"
            required
            margin="normal"
          />
          </div>
          <div>
          <TextField sx={{marginLeft: '70px'}}
            type="text"
            label="Enter Fare"
            required
            margin="normal"
          />
          </div>
          <div>
          <Button sx={{marginLeft: '130px', marginTop:'15px', marginBottom: '7px'}} type="submit" variant="contained" color="primary">
            POST
          </Button>
          </div>
        </form>
        </div>
        </Card>
        </Card>
        </Grid>
        </Grid>
      );
    };

export default Postride;
