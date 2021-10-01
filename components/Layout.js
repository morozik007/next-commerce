import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Next Commerce</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Next Commerce</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>@ by Morozik</Typography>
      </footer>
    </div>
  );
}

export default Layout;
