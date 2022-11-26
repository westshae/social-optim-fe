import { AppShell } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { isLoggedIn, isUserAdmin } from "./interactions/auth";

export default function Home() {
  const Router = useRouter();

  useEffect(() => {
    const loginResult = isLoggedIn();
    const adminResult = isUserAdmin();
    if (!loginResult) Router.push("/auth");
    if (!adminResult) Router.push("/dashboard");
  }, []);

  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <h1>Admin Panel</h1>
    </AppShell>
  );
}
