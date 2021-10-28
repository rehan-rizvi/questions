import makeStyles from "@mui/styles/makeStyles";
import green from "@mui/material/colors/green";
import red from "@mui/material/colors/red";


const useStyles = makeStyles(theme => ({
  todoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paperRoot: {
    padding: 16,
    margin: 16,
    height: 100,
    maxHeight: 100,
    width: '50%',
    overflow: 'auto',
    background: `${red[50]} !important`,
    color: `${red[900]} !important`,
  },
  todoCompleted: {
    background: `${green[50]} !important`,
    color: `${green[900]} !important`,
  },
  todoTitleWrapper: {
    marginTop: 8,
  },
  todoTitleText: {
    fontFamily: 'Sora, sans-serif !important',
  },
  todoTitleLabel: {
    fontFamily: 'Sora, sans-serif !important',
    fontWeight: 'bold',
  },
}));

export default useStyles;