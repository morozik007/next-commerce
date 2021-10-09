import { Typography } from '@material-ui/core';
import useStyles from '../utils/styles';
import React from 'react';

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography>@ by Morozik</Typography>
    </footer>
  );
}

export default Footer;
