import { useUser } from "@auth0/nextjs-auth0";
import { Button, Group } from "@mantine/core";
import Link from "next/link";

const LoginOutButton = (props:any) => {
  const { user } = useUser();

  if(user){
    return (
      <Group>
        <Link href="/api/auth/logout">
          <Button sx={{color:'#EEEEEE', backgroundColor:'#800000'}}>Logout</Button>
        </Link>
      </Group>
    )
  }else{
    return (
      <Group>
        <Link href="/api/auth/login">
          <Button sx={{color:'#EEEEEE', backgroundColor:'#800000'}}>Login</Button>
        </Link>
      </Group>
    )

  }
};

export default LoginOutButton;