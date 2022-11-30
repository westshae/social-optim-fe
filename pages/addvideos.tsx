import { AppShell, Button, createStyles, Grid, Group, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { isLoggedIn, isUserAdmin } from "./interactions/auth";
import { uploadMulti } from "./interactions/videos";

export default function Home() {
  const Router = useRouter();

  useEffect(() => {
    const loginResult = isLoggedIn();
    const adminResult = isUserAdmin();
    if (!loginResult) Router.push("/auth");
    if (!adminResult) Router.push("/dashboard");
  }, []);

  const multiUpload = useForm({
    initialValues: {
      json: ''
    }
  });

  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <h1>Add Video</h1>
      <Group>
        <Title>Add individual video</Title>

      </Group>
      <Group>
        <Title>Add JSON of videos</Title>
        <form onSubmit={multiUpload.onSubmit((values) => uploadMulti(values.json))}>        
            <Textarea
              withAsterisk
              label="JSON"
              placeholder="[{id:'d872jasdh'}...]"
              {...multiUpload.getInputProps('json')}
            />
            <Button type="submit">Submit</Button>
          </form>

      </Group>
    </AppShell>
  );
}
