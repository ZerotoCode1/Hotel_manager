import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    test: {
      color: theme.palette.error.light,
    },
  };
});

const Login = () => {
  const classes = useStyles();
  return <div className={classes.test}>login</div>;
};

export default Login;
