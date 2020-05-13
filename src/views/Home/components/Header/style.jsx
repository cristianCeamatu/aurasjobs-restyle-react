import { makeStyles } from '@material-ui/core/styles';
import headerBackground from './img/header2.png';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    padding: '50px 20px 250px',
    width: '100%',
    backgroundImage: `url(${headerBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 center',
    backgroundSize: 'cover',
    display: 'block',
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '150px 20px 330px',
    },
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: '18px',
    letterSpacing: '1.6px',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    textShadow: '1px 1px 1px rgba(40, 40, 40, 1)',
    padding: '15px',
    boxShadow: '1px 1px 1px 0px rgba(40,40,40,0.75)',
    zIndex: 5,
    [theme.breakpoints.up('md')]: {
      fontSize: '22px',
    },
  },
  particlesCanvas: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export default useStyles;
