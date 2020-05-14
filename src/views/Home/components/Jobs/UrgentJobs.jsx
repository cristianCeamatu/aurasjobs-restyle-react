import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Grow,
  Box,
} from '@material-ui/core';
import { UrgentJobsProvider, UrgentJobsContext } from '../../context/UrgentJobsState';
import UrgentJob from './UrgentJob';

const Jobs = () => {
  const classes = useStyles();
  const { urgentJobs } = useContext(UrgentJobsContext);

  return (
    <UrgentJobsProvider>
      <div className={classes.topSkew} />
      <Box component="div" className={classes.container}>
        <Grow in timeout={{ enter: 2000 }}>
          <Typography component="h3" variant="h5" align="center" gutterBottom>
            Current openings
          </Typography>
        </Grow>
        <Grid container className={classes.urgentJobsContainer}>
          {urgentJobs.map((job) => <UrgentJob key={job.id} job={job} />)}
        </Grid>
      </Box>
      <div className={classes.bottomSkew} />
    </UrgentJobsProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '30px 20px',
    marginTop: '50px',
  },
  topSkew: {
    position: 'relative',
    top: '-2px',
    width: '100%',
    height: 0,
    borderStyle: 'solid',
    borderWidth: '40px 360px 0 0',
    borderColor: '#f7c40d transparent transparent transparent',
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
  urgentJobsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
  },
}));

export default Jobs;
