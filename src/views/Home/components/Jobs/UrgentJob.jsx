import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grow,
  IconButton,
} from '@material-ui/core';
import {
  Today,
  FlightTakeoff,
  Business,
  DirectionsBoat,
  TouchApp,
  Facebook,
  Phone,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: '10px auto',
    padding: theme.spacing(1),
    background: '#ff880010',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 350,
    },
  },
  listItemIcon: {
    color: '#ff8700',
    marginRight: -theme.spacing(3),
  },
  applyButton: {
    borderColor: '#ff8700',
    color: '#ff8700',
    fontWeight: 'bold',
  },
  polygon: {
    background: '#ffffff',
    width: '100%',
    height: '100%',
    transition: 'all 200ms ease-out',
    '-webkit-clip-path': 'polygon(0 30%,30% 0, 100% 0,100% 70%,70% 100%,0 100%)',
    '&:hover': {
      '-webkit-clip-path': 'polygon(0 0, 50% 0, 100% 0, 100% 50%, 100% 100%, 0 100%)',
    },
  },
  cardContent: {
    '&:hover': {
      background: '#ffffff',
      cursor: 'default',
    },
  },

}));

const UrgentJob = ({ job }) => {
  const classes = useStyles();
  const { fields } = job;

  return (
    <Card className={classes.root}>
      <div className={classes.polygon}>
        <CardActionArea>
          {/* <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      /> */}
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" align="center" component="h2">
              {fields.position}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}><Today /></ListItemIcon>
                <ListItemText primary={`Embarkation: ${fields.date}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}><DirectionsBoat /></ListItemIcon>
                <ListItemText primary={`Ship: ${fields.ship}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}><Business /></ListItemIcon>
                <ListItemText primary={`Company: ${fields.company}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}><FlightTakeoff /></ListItemIcon>
                <ListItemText primary={`Travel cost: ${fields['flight ticket']}`} />
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="outlined" color="primary" startIcon={<Phone />}>
            Call
          </Button>
          <Button size="small" variant="outlined" color="secondary" startIcon={<TouchApp />} className={classes.applyButton}>
            Apply
          </Button>
          <Button size="small" variant="outlined" color="primary" startIcon={<Facebook />}>
            Share
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

UrgentJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default UrgentJob;
