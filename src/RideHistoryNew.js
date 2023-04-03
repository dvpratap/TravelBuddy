import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@mui/material/CardMedia";
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

const RideHistoryNew = () => {
    const classes = useStyles();
    return(
        <div>
            <Card>
                <CardMedia
                    sx={{ height: 300 }}
                    image={require('./Images/Banner.jpg')}
                    title="green iguana" />
            </Card>
            <div className={classes.splitScreen}>
                <div className={classes.lefside}>
                    <Card className={classes.filter}>
                        <CardMedia sx={{ height: 300,width:300}} image={require('./Images/HistoryAd1.jpg')}/>
                        <a sx={{color:red}} href='https://www.mcdonalds.com/ca/en-ca.html'>Lear more</a>
                    </Card>
                    <Card className={classes.filter}>
                        <CardMedia sx={{ height: 300,width:300}} image={require('./Images/Visa.jpg')}/>
                        <a sx={{color:red}} href='https://www.visa.ca/'>Lear more</a>
                    </Card>
                    <Card className={classes.filter}>
                        <CardMedia sx={{ height: 300,width:300}} image={require('./Images/HistoryAd3.jpg')}/>
                        <a sx={{color:red}} href='https://www.walmart.ca/en'>Lear more</a>
                    </Card>
                </div>
                <div className={classes.rightside}>
                    <Card sx={{ marginTop: '2%',marginLeft:'28%'}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={require('./Images/HistoryCar1.jpg')}
                            title="green iguana"
                        />
                        <CardContent>
                            <div className={classes.splitScreen}>
                                <div className={classes.typoLeftside}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Spring Garden, Halifax to Sydney Downtown
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        with John
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        17th March, 2023
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Passengers: 3
                                    </Typography>
                                </div>
                                <div className={classes.typoRightside}>
                                    <Typography sx={{alignItems:'flex-end', flex: 1,flexDirection:'column-reverse',color:'green',fontSize:'100%'}} variant="body2" color="text.secondary">
                                        Ride Complete
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card sx={{ marginTop: '2%',marginLeft:'28%'}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={require('./Images/Hyundai.jpg')}
                            title="green iguana"
                        />
                        <CardContent>
                            <div className={classes.splitScreen}>
                                <div className={classes.typoLeftside}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Argyle Street to Mount Saint Vincent University
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        with Kerri
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        03rd April, 2023
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Passengers: 3
                                    </Typography>
                                </div>
                                <div className={classes.typoRightside}>
                                    <Typography sx={{alignItems:'flex-end', flex: 1,flexDirection:'column-reverse',color:'red',fontSize:'100%'}} variant="body2" color="text.secondary">
                                        Ride Canceled
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card sx={{ marginTop: '2%',marginLeft:'28%'}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={require('./Images/HistoryCar3.jpg')}
                            title="green iguana"
                        />
                        <CardContent>
                            <div className={classes.splitScreen}>
                                <div className={classes.typoLeftside}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Barrington Hotel Halifax to Cape Breton University
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        with Liam
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        27th March, 2023
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Passengers: 5
                                    </Typography>
                                </div>
                                <div className={classes.typoRightside}>
                                    <Typography sx={{alignItems:'flex-end', flex: 1,flexDirection:'column-reverse',color:'green',fontSize:'100%'}} variant="body2" color="text.secondary">
                                        Ride Complete
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default RideHistoryNew