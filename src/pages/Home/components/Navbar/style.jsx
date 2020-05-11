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
  contactsMenu: {
    color: theme.palette.text.secondary,
  },
  contactsItemText: {
    marginLeft: theme.spacing(1),
  },
  logo: {
    width: theme.spacing(20),
    height: theme.spacing(6),
  },
  flag: {
    width: theme.spacing(4),
  },
  languageText: {
    marginLeft: theme.spacing(3),
  },
  menuItemIcon: {
    color: theme.palette.info.dark,
  },
  mdUpNavbar: {
    display: 'flex',
  },
  mdUpMenuItemIcon: {
    marginRight: -theme.spacing(3),
  },
  contactMenuAnchors: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.info.main,
  },
}));

export default useStyles;
