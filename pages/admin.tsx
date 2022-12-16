import { AppShell, createStyles, Grid } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GridLink from "./components/generalComponents/GridLink";
import Header from "./components/generalComponents/Header";
import Navigation from "./components/generalComponents/Navigation";
import { isLoggedIn, isUserAdmin } from "./interactions/auth";

export default function Home() {
  const Router = useRouter();

  useEffect(() => {
    const loginResult = isLoggedIn();
    const adminResult = isUserAdmin();
    if (!loginResult) Router.push("/auth");
    if (!adminResult) Router.push("/dashboard");
  }, []);

  const useStyles = createStyles((theme) => ({
    inner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 60,
    },
  }));

  const { classes, cx } = useStyles();
  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <Grid>
        <Grid.Col span={4}>
          <Link href="/addvideos">
            <GridLink text="Add Videos" imgSrc="https://www.clipartmax.com/png/middle/75-756149_big-image-generic-logo-png-transparent.png"/>
          </Link>
        </Grid.Col>
      </Grid>
    </AppShell>
  );
}
