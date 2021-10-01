import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: 'red',
    '& a': {
      color: '#fff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
    borderTop: 'solid 1px red',
    paddingTop: 25,
    paddingBottom: 25,
    marginTop: 30,
  },
});

export default useStyles;
