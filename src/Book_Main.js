import {posts} from './data/post'
import {useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';




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
    width: '19%',
    marginLeft: '5%',
    marginTop: '2%',
},
rightside: {
        width: '65%',
    marginLeft: '-7%',
   marginTop: '2%',
},
typoLeftside: {
    width: '78%',
    marginLeft: '5%',
    marginTop: '7%',
},
typoRightside: {
    marginLeft: '9%',
   marginTop: '7%',
}
  
});
  

const BookMain=()=>{
  const classes = useStyles();
  const navigate=useNavigate();

  const RouteTo = param=>event => {
  navigate("/Book_Desc",{state:{data:param}})
  }

  const [state, setState] = useState({json:posts});
  
  const filterOnLocation = (key) => ()=>{

  const post = posts.filter(l => {
  return l.source.match( key );
  });
  setState(previousState=>({
    ...previousState,json:post
  }))
  }


    // eslint-disable-next-line
    const result = posts.reduce( (acc, o) => (acc[o.source] = (acc[o.source] || 0)+1, acc), {} );
            
    return(
      <div>
                <Card>
          <CardMedia
            sx={{ height: 300 }}
            image={require('./Images/Banner.jpg')}
            title="green iguana" />
        </Card>
      <div className={classes.splitScreen}>
        <div className={classes.leftside}>
        <Card className={classes.filter}>
            <CardContent>
              <span>Locations:</span> 
                  {Object.keys(result).map((key,i)=>
                    (
                       <Typography sx={{cursor:'pointer', marginTop:'5%'}} onClick={filterOnLocation(key)} key={key} gutterBottom variant="h8" component="div">
                        {key}:({result[key]})
                        </Typography>
                    )
                    )
                  } 
            </CardContent>
        </Card>
        <Card className={classes.filter}>
          <CardMedia sx={{ height: 300,width:300}} image={require('./Images/Scotia_Bank.jpg')}/>
          <a sx={{color:red}} href='https://www.scotiabank.com/ca/en/personal.html'>Lear more</a>
        </Card>
        <Card className={classes.filter}>
          <CardMedia sx={{ height: 300,width:300}} image={require('./Images/Visa.jpg')}/>
          <a sx={{color:red}} href='https://www.visa.ca/'>Lear more</a>
        </Card>
        <Card className={classes.filter}>
          <CardMedia sx={{ height: 300,width:300}} image={require('./Images/TD_Bank.jpg')}/>
          <a sx={{color:red}} href='https://www.td.com/ca/en/personal-banking'>Lear more</a>
        </Card>
        </div>
        <div className={classes.rightside}>
        {state.json.map((data,key)=>
            {
                return(
                    
                    <Card key={key} sx={{ marginTop: '2%',marginLeft:'28%'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('./Images/Hyundai.jpg')}
        title="green iguana"
      />
      <CardContent>
        <div className={classes.splitScreen}>
          <div className={classes.typoLeftside}>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {data.description}
        </Typography>
        </div>
        <div className={classes.typoRightside}>
        <Typography   sx={{alignItems:'flex-end', flex: 1,flexDirection:'column-reverse',color:'green',fontSize:'182%'}} variant="body2" color="text.secondary">
         {data.fare}
        </Typography>
        </div>
        </div>
      </CardContent>
      <CardActions sx={{alignItems:'flex-end', flex: 1,flexDirection:'column-reverse'}}>
        <Button  sx={{cursor:'pointer'}} onClick={RouteTo(data)} variant="contained">View Details</Button>
      </CardActions>
    </Card>
                )
            })}
            </div>
            </div>    
            </div>
    )
}

export default BookMain