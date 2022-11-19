import { Navbar, NavLink } from "@mantine/core";
import Link from "next/link";

const Navigation = (props:any) => {

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
  </Navbar>
 );
};

export default Navigation;