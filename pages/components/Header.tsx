import { Header} from "@mantine/core";
import LoginOutButton from "./LoginOutButton";

const TopNavigation = (props:any) => {
 return(
  <Header height={60} p="xs">
    <LoginOutButton/>
  </Header>
 );
};

export default TopNavigation;