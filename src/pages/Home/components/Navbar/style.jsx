import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuSliderBox: {
    margin: 0,
    width: 250,
    background: '#f9f9f9',
    height: '100%',
    fontWeight: 'bold',
  },
  logo: {
    width: theme.spacing(22),
    height: theme.spacing(8),
  },
  sideMenuLogo: {
    margin: theme.spacing(1),
  },
  flag: {
    width: theme.spacing(4),
  },
  languageText: {
    marginLeft: theme.spacing(1),
  },
  menuItemIcon: {
    marginRight: -theme.spacing(3),
    color: '#ff8700',
  },
  mdUpNavbar: {
    display: 'flex',
    fontWeight: 'bold',
  },
  mdUpMenuItemIcon: {
    marginRight: -theme.spacing(3),
  },
  contactMenuAnchors: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
}));

export default useStyles;
