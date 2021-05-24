import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import { format } from "timeago.js";
import pic from '../static/object.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  root2:{
      flexGrow:1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  

  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RequestInfo(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [pet , setpet] = React.useState(props.name[0]);

 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {pet}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader=" Sunday 14 2021 june"
        
      />
      <CardMedia
        className={classes.media}
        image={pic}
        title="Paella dish"
      />
      <CardContent>
      <div className={classes.root2}>
      <Grid container spacing={1}>

        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{props.weight}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{props.reward}</Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>{props.pickup}</Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>To</Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>{props.destination}</Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
    <Paper className={classes.paper}><PhoneIcon />{props.contact}</Paper>
        </Grid>

      </Grid>

      <p className={classes.paper}> {format(props.ctime)}</p>
    </div>

      </CardContent>
     

    </div>
  );
}
