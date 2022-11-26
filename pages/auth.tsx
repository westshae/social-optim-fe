import { AppShell, Button, Checkbox, Group, TextInput, Title } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { useForm } from '@mantine/form';
import { login } from "./interactions/auth";

export default function Home() {

  let email;
  let token;
  useEffect(()=>{
    if (typeof window !== "undefined") {
      email = window.localStorage.getItem("email");
      token = window.localStorage.getItem("token");
    }  
  }, []);
  
  const signInForm = useForm({
    initialValues: {
      email: '',
      code: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      code : (value) => (/^\d{10}$/.test(value) ? null : 'Invalid code')
    },
  });
  const sendEmailForm = useForm({
    initialValues: {
      email: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    },
  });

  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <Group>
        <Title>Sign in using emailed code</Title>
        <form onSubmit={signInForm.onSubmit((values) => login(values.email, values.code))}>        
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...signInForm.getInputProps('email')}
          />
          <TextInput
            withAsterisk
            label="Code"
            placeholder="1234567890"
            {...signInForm.getInputProps('code')}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Group>
      <Group>
        <Title>Request code email</Title>
        <form onSubmit={sendEmailForm.onSubmit((values) => login(values.email))}>        
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...sendEmailForm.getInputProps('email')}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Group>
      <h1>Auth</h1>
      <h1>email: {email}</h1>
      <h1>token: {token}</h1>

    </AppShell>
  );
}