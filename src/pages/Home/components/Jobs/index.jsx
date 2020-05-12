import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Grow,
  Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '30px 20px',
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
}))

const Jobs = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.topSkew} />
      <Box className={classes.container}>
        <Grow in="true" timeout={{enter: 2000}}>
          <Typography component="h3" variant="h3" align="center" gutterBottom="true">
            Jobs
          </Typography>
        </Grow>
        <Button variant="outlined" color="secondary" size="large"> To jobs</Button>
        <Button variant="outlined" color="primary" size="large"> About us</Button>
      </Box>
      <div className={classes.bottomSkew} />
    </>
  );
}

export default Jobs;
