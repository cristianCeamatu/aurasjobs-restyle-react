import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
    background: '#ffffff',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 350,
    },
  },
  button: {
    padding: '3px 6px',
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
  cardActions: {
    justifyContent: 'center',
  },
  bottomSkew: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0 0 40px 360px',
    borderColor: 'transparent transparent #f7c40d transparent',
  },
}));

const UrgentJob = ({ job }) => {
  const classes = useStyles();
  const { fields } = job;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography component="h3" variant="h6" align="center" gutterBottom>
            {fields.position}
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}><Today /></ListItemIcon>
              <ListItemText secondary={`Embarkation: ${fields.date}`} />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}><DirectionsBoat /></ListItemIcon>
              <ListItemText secondary={`Ship: ${fields.ship}`} />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}><Business /></ListItemIcon>
              <ListItemText secondary={`Company: ${fields.company}`} />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}><FlightTakeoff /></ListItemIcon>
              <ListItemText secondary={`Travel cost: ${fields['flight ticket']}`} />
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button className={classes.button} size="small" variant="outlined" color="primary" startIcon={<Phone />}>
          Call
        </Button>
        <Button className={classes.button} size="small" variant="outlined" color="secondary" startIcon={<TouchApp />}>
          Apply
        </Button>
        <Button className={classes.button} size="small" variant="outlined" color="primary" startIcon={<Facebook />}>
          Share
        </Button>
      </CardActions>
      <div className={classes.bottomSkew} />
    </Card>
  );
};

UrgentJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default UrgentJob;
