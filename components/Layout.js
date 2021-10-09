import React, { useContext } from 'react';
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
  Switch,
  Badge,
} from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles';
import Cookies from 'js-cookie';
import Footer from './Footer';

const Layout = ({ title, description, pageTitle, children }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  //console.log(state);
  const theme = createTheme({
    typography: {
      h1: {
        fontWeight: '600',
        fontSize: '1.7rem',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Commerce` : 'Next Commerce'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static" className={classes.navbar}>
            <Toolbar>
              <NextLink href="/" passHref>
                <Link underline="none">
                  <Typography className={classes.logo}>
                    Next Commerce
                  </Typography>
                </Link>
              </NextLink>
              <div className={classes.grow}></div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
                inputProps={{ 'aria-label': 'controlled' }}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  <Typography component="span">
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        color="secondary"
                        badgeContent={cart.cartItems.length}
                      >
                        Cart
                      </Badge>
                    ) : (
                      'Cart'
                    )}
                  </Typography>
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </Toolbar>
          </AppBar>
          <Container className={classes.main}>
            <h1>{pageTitle}</h1>
            {children}
          </Container>
          <Footer className={classes.footer} />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
