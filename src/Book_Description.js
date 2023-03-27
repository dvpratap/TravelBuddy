import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';




const useStyles = makeStyles({
filter:{
       marginTop: '5%',
       marginLeft:'3%',
},
splitScreen: {
display: 'flex',
flexDirection: 'row',
},
leftside: {
    width: '70%',
    marginLeft: '5%',
    marginTop: '3%',
},
rightside: {
width: '65%',
marginLeft: '-7%',
marginTop: '7%',
},
typoLeftside: {
marginLeft: '5%',
marginTop: '3%',
},
typoRightside: {
marginLeft: '9%',
marginTop: '22%',
},
typoMiddleside: {
marginLeft: '9%',
marginTop: '22%',
}
  
  });
  

function BookDesc(){
const classes = useStyles();
const locations=useLocation();
const posts=locations.state.data;
console.log(locations.state)
return(
      <>
        <div className={classes.splitScreen}>
        <div className={classes.leftside}>
      <Card sx={{ marginTop: '2%', marginLeft: '8%', maxWidth: '80%', height: '50vw', background:'lightgray' }}>
        <CardMedia
            sx={{ height: 400 }}
            image={require('./Images/car2.jpg')}
            title="green iguana" />
        <CardContent>
            <div>
                <div>
                    <Typography gutterBottom variant="h5" component="div">
                        {posts.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {posts.description}
                    </Typography>
                    <Typography sx={{ alignItems: 'flex-end', flex: 1, flexDirection: 'column-reverse', color: 'green', fontSize: '182%' }} variant="body2" color="text.secondary">
                    {posts.fare}
                    </Typography>
                </div>
                <div className={classes.splitScreen}>
                <div className={classes.typoLeftside}>
                    <Typography  gutterBottom variant="h6" component="div">
                    <CardMedia   sx={{ height: 80,width:80, borderRadius:'50%'}} image={require('./Images/driver_john.jpg')}/>
                    {posts.driverName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                    <CardMedia   sx={{ height: 30,width:30, borderRadius:'50%'}} image={require('./Images/Contact.jpg')}/>
                    {posts.contact}
                    </Typography>
                </div>
                <div className={classes.typoMiddleside}>
                    <Typography gutterBottom variant="h6" component="div">
                    <CardMedia   sx={{ height: 30,width:30, borderRadius:'50%'}} image={require('./Images/Email.jpg')}/>
                    {posts.emailid}
                    </Typography>
                </div>
                <div className={classes.typoRightside}>
                    <Typography gutterBottom variant="h6" component="div">
                    <CardMedia   sx={{ height: 30,width:30, borderRadius:'50%'}} image={require('./Images/Number_Plate.jpg')}/>
                    {posts.licenseNumber}
                    </Typography>
                </div>
                </div>
            </div>
        </CardContent>
    </Card>
        </div>
         <div className={classes.rightside}>
            <Card sx={{ marginTop: '2%', marginLeft: '8%', maxWidth: '60%', maxHeight: '180%',background:'floralwhite' }}>
            <CardContent>
                <div>
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                            Contact {posts.driverName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                                    <TextField  multiline rows={4} sx={{ width: '90%'}} defaultValue="Hey, I am interested."/>
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ marginTop: '2%',marginLeft:'28%'}} variant="body2" color="text.secondary">
                           <Button variant="contained">Send Message</Button>
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card sx={{ marginTop: '2%', marginLeft: '8%', maxWidth: '60%', maxHeight: '180%' }}>
          <CardMedia sx={{ height: 200,width:480}} image={require('./Images/GMC.jpg')}/>
          <a  href='https://www.gmccanada.ca'>Lear more</a>
        </Card>
        <Card sx={{ marginTop: '2%', marginLeft: '8%', maxWidth: '60%', maxHeight: '180%' }}>
          <CardMedia sx={{ height: 200,width:480}} image={require('./Images/Mustang.jpg')}/>
          <a  href='https://www.ford.ca/cars/mustang/'>Lear more</a>
        </Card> 
         </div>
        </div>

        </>
)}


export default BookDesc