import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#fff',
      marginLeft: 20,
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
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    //border: 'solid 1px green',
  },
  main: {
    flex: '1 0 auto',
    //border: 'solid 1px blue',
  },
  footer: {
    flexShrink: 0,
    //borderTop: 'solid 1px red',
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
