import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

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
          <NextLink href="/" passHref>
            <Link underline="none">
              <Typography className={classes.logo}>Next Commerce</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <NextLink href="/cart" passHref>
            <Link>Cart</Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Link ml={10}>Login</Link>
          </NextLink>
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
