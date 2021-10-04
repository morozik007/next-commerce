import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

import useStyles from '../utils/styles';

const Layout = ({ title, description, children }) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontWeight: '600',
        fontSize: '1.7rem',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Commerce` : 'Next Commerce'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
              <Link>Login</Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>@ by Morozik</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
