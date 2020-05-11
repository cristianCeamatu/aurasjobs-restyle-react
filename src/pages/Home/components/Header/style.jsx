import { makeStyles } from '@material-ui/core/styles';
import headerBackground from './img/header11.jpg';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    padding: '250px 50px 350px',
    width: '100%',
    backgroundImage: `url(${headerBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'block',
    position: 'relative',
    textAlign: 'center',
  },
  headerTitle: {
    color: 'tan',
    fontSize: '22px',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: '22px',
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
