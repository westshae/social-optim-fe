import { Button, Group, Image } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";

const LoginOutButton = (props:any) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.localStorage.getItem("token") !== null) {
        setLoggedIn(true);
      }
    }
  });

  const logout = () =>{
    if (typeof window !== undefined) {
      window.localStorage.removeItem("token")
      setLoggedIn(false);
    }
  }

  if(loggedIn){
    return (
      <Group>
        <Link href="/profile">
          <Group>
          </Group>
        </Link>
        <Button onClick={logout} sx={{color:'#EEEEEE', backgroundColor:'#800000'}}>Logout</Button>
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