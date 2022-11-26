import { AppShell } from "@mantine/core";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { isLoggedIn } from "./interactions/auth";

export default function Home() {
  const [displayPage, setDisplayPage] = useState(false);
  useEffect(() => {
    let result = isLoggedIn();
    if(result) setDisplayPage(result);
  }, []);

  const Router = useRouter();

  if(displayPage){
    return (
      <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
        <h1>Admin Panel</h1>
      </AppShell>
    );
  } else {
    Router.push("/auth");
  }
}