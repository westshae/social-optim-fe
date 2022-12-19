import { AppShell, Grid } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import GridLink from "./components/GridLink";
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
      <Grid>
        <Grid.Col span={4}>
          <Link href="/thumbnailcompare">
            <GridLink text="Thumbnail Compare" imgSrc="https://www.clipartmax.com/png/middle/75-756149_big-image-generic-logo-png-transparent.png"/>
          </Link>
        </Grid.Col>
      </Grid>
    </AppShell>
  );
}
