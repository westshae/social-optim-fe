import { Button, Group, Image } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";

const LoginOutButton = (props:any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [logOutUser, setLogout] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.localStorage.getItem("token") !== null) {
        setLoggedIn(true);
      }
    }
  });

  useEffect(()=>{
    if(logOutUser){
      if (typeof window !== undefined) {
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("email")
        setLoggedIn(false);
      }
    }
  }, [logOutUser]);

  if(loggedIn){
    return (
      <Group>
        <Link href="/profile">
          <Group>
          </Group>
        </Link>
        <Button onClick={() => setLogout(!logOutUser)} sx={{color:'#EEEEEE', backgroundColor:'#800000'}}>Logout</Button>
      </Group>
    )
  }else{
    return (
      <Group>
        <Link href="/auth">
          <Button sx={{color:'#EEEEEE', backgroundColor:'#800000'}}>Login</Button>
        </Link>
      </Group>
    )
  }
};

export default LoginOutButton;