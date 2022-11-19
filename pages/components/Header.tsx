import { Center, createStyles, Header} from "@mantine/core";
import LoginOutButton from "./LoginOutButton";

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  }
}));

const TopNavigation = (props:any) => {
  const { classes, cx } = useStyles();
  return(
    <Header height={60} p="xs" className={classes.inner}>
      <LoginOutButton/>
    </Header>
  );
};

export default TopNavigation;