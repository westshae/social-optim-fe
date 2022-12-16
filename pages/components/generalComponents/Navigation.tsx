import { Navbar, NavLink } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isUserAdmin } from "../../interactions/auth";

const Navigation = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(()=>{
    let adminResult = isUserAdmin();
    if(adminResult) setIsAdmin(adminResult);
  });

 return(
  <Navbar width={{ base: 300 }} height={'100%'} p="xs">
    <Link href="/">
      <NavLink label="Homepage"/>
    </Link>
    <Link href="/dashboard">
      <NavLink label="Dashboard"/>
    </Link>
    <Link href="/profile">
      <NavLink label="Profile"/>
    </Link>
    {isAdmin &&
    <Link href="/admin">
      <NavLink label="Admin Panel"/>
    </Link>
    }
  </Navbar>
 );
};

export default Navigation;