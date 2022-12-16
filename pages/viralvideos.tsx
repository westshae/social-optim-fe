import { AppShell, Button, createStyles, Grid, Group, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThumbnailFrame from "./components/dashboardComponents/ThumbnailFrame";
import Header from "./components/generalComponents/Header";
import Navigation from "./components/generalComponents/Navigation";
import { isLoggedIn } from "./interactions/auth";
import { uploadMulti } from "./interactions/videos";

export default function Home() {
  const Router = useRouter();

  useEffect(() => {
    const loginResult = isLoggedIn();
    if (!loginResult) Router.push("/auth");
  }, []);

  const multiUpload = useForm({
    initialValues: {
      json: ''
    }
  });

  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <Group>
        <Title>Viral Video Learner</Title>

      </Group>
      <Group>
        <ThumbnailFrame id="OK9ZvttHFms" title="title" views={10900} channelName="MrBeast" ratio={1.5}/>
      </Group>
    </AppShell>
  );
}
