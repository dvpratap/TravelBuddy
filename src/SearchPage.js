import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{width: '80%', marginLeft:'10%'}}>
          <Grid item xs={12} sm={8} md={4} key='1234'>
            <Card sx={{height:'100%', }}>
            <CardActionArea id='12345' target="_blank" rel="noopener">
              <CardMedia
                component="img"
                height="300"
                image={require('./Images/car.png')}
                alt='share-ride'
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" sx={{marginLeft: '70px'}}>
                  Post A Ride
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  Share your ride, find a travel buddy
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} key='1234'>
            <Card sx={{height:'100%'}}>
            <CardActionArea id='12345' target="_blank" rel="noopener" >
              <CardMedia
                component="img"
                height="300"
                image={require('./Images/book.PNG')}
                alt='book-ride'
              />
              <CardContent >
                <Typography  gutterBottom variant="h5" component="h2" sx={{marginLeft: '70px'}}>
                  <Link to="/book_main">  Book a Ride</Link>
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  Find a travel buddy and save money
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} key='1234'>
            <Card sx={{height:'100%'}}>
            <CardActionArea id='12345' target="_blank" rel="noopener" >
              <CardMedia
                component="img"
                height="300"
                image={require('./Images/request.jpeg')}
                alt='diamond-ring'
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="h2" sx={{marginLeft: '70px'}}>
                  Request For Ride
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  Ask if someone going same route
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
      </Grid>
    </div>
  )
}

export default SearchPage