import { AppShell, Grid } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import GridLink from "./components/generalComponents/GridLink";
import Header from "./components/generalComponents/Header";
import Navigation from "./components/generalComponents/Navigation";
import { isLoggedIn } from "./interactions/auth";

export default function Home() {
  const Router = useRouter();

  useEffect(() => {
    const loginResult = isLoggedIn();
    if (!loginResult) Router.push("/auth");
  }, []);

  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <Grid>
        <Grid.Col span={4}>
          <Link href="/viralvideos">
            <GridLink text="Viral Videos" imgSrc="https://www.clipartmax.com/png/middle/75-756149_big-image-generic-logo-png-transparent.png"/>
          </Link>
        </Grid.Col>
      </Grid>
    </AppShell>
  );
}
