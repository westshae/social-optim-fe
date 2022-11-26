import { AppShell } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { isLoggedIn } from "./interactions/auth";

export default function Home() {
  const Router = useRouter();

  useEffect(() => {
    const loginResult = isLoggedIn();
    if (!loginResult) Router.push("/auth");
  }, []);

  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <h1>Dashboard</h1>
    </AppShell>
  );
}
