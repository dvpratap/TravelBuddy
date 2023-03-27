import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {useNavigate} from 'react-router-dom';
import CardMedia from "@mui/material/CardMedia";
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';



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

const RideHistory = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const RouteTo = () => {
        navigate("/rideHistoryNew")
        alert("Ride is canceled")
    }

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
                                        Spring Garden, Halifax to Sydney Downtown
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        with Akash
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
                                        Spring Garden, Halifax to Sydney Downtown
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        with Akash
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        17th March, 2023
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Passengers: 3
                                    </Typography>
                                </div>
                                <div className={classes.typoRightside}>
                                    <Typography sx={{alignItems:'flex-end', flex: 1,flexDirection:'column-reverse',color:'orange',fontSize:'100%'}} variant="body2" color="text.secondary">
                                        Ride Ongoing
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                        <CardActions sx={{alignItems:'flex-end', flex: 1,flexDirection:'column-reverse'}}>
                            <Button  sx={{cursor:'pointer'}} onClick={RouteTo} variant="contained">Cancel Ride</Button>
                        </CardActions>
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
                                        Spring Garden, Halifax to Sydney Downtown
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        with Akash
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
                </div>
            </div>
        </div>
    )
}

export default RideHistory