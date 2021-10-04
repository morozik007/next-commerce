import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: 'red',
    '& a': {
      color: '#fff',
      marginLeft: 10,
      textDecoration: 'underline',
      '&:first-child': {
        marginLeft: 0,
        textDecoration: 'none',
      },
    },
  },
  logo: {
    fontSize: 24,
    color: '#fff',
  },
  grow: {
    flexGrow: 1,
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
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default useStyles;
