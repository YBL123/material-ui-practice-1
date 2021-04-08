import { makeStyles } from '@material-ui/core/styles';

//call back function that immediately returns an object with all the styles
// can explore theme on the material ui website
const useStyles = makeStyles((theme) => ({
  container: {
    // inbuilt color
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: '20px',
  },
  buttons: {
    marginTop: '40px',
  },
  cardGrid: {
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.26%'  // 16:9
  },
  cardContent: {
    flexGrow: 1, //expand fully
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px 0'
  }
}));

export default useStyles;
