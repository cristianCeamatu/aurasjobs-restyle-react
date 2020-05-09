import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuSliderBox: {
    margin: 0,
    width: 250,
    background: '#f9f9f9',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  flag: {
    marginRight: theme.spacing(3),
    width: theme.spacing(4),
  },
  menuItemIcon: {
    color: theme.palette.info.main,
  },
}));

export default useStyles;
