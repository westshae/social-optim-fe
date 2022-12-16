import { Center, createStyles, Group, Header, Title} from "@mantine/core";
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
      <Group>
        <Title order={2} sx={{alignItems:"center"}}>Social-Optim</Title>
      </Group>
      <Group>
        <LoginOutButton/>
      </Group>
    </Header>
  );
};

export default TopNavigation;