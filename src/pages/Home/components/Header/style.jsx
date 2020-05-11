import { makeStyles } from '@material-ui/core/styles';
import headerBackground from './img/header2.png';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    padding: '50px 50px 350px',
    width: '100%',
    backgroundImage: `url(${headerBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'block',
    position: 'relative',
  },
  headerSubtitle: {
    textAlign: 'center',
    fontSize: '24px',
  },
  particlesCanvas: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: '1000',
  },
}));

export default useStyles;
