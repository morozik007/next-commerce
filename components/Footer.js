import { Container, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';
import React from 'react';

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Typography>@ by Morozik 2021</Typography>
      </Container>
    </footer>
  );
}

export default Footer;
