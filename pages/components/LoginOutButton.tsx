import { Button, Group, Image, Text } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";

const LoginOutButton = (props:any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [logOutUser, setLogout] = useState(false);
  const [email, setEmail] = useState('');


  useEffect(() => {
    if (typeof window !== undefined) {
      let checkEmail = window.localStorage.getItem("email");
      let checkToken = window.localStorage.getItem("token");

      if (checkEmail != null && checkToken != null) {
        setLoggedIn(true);
        setEmail(checkEmail);
      }
    }
  }, []);

  useEffect(()=>{
    if(logOutUser){
      if (typeof window !== undefined) {

        window.localStorage.removeItem("token");
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("isAdmin");
        setLoggedIn(false);
      }
    }
  }, [logOutUser]);

  if(loggedIn){
    return (
      <Group>
        <Link href="/profile">
          <Group>
            <Text>{email}</Text>
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