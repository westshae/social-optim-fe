import { AppShell, Button, Checkbox, Group, TextInput, Title } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/generalComponents/Header";
import { useForm } from '@mantine/form';
import { login } from "./interactions/auth";
import Navigation from "./components/generalComponents/Navigation";

export default function Home() {
  const [displayLogin, setDisplayLogin] = useState(false);

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

  const handleSubmit = (email:string, code?:string) =>{
    if(!code){
      login(email)
      setDisplayLogin(!displayLogin);

    } else {
      login(email, code);
      setDisplayLogin(!displayLogin);
    }
  }

  if(displayLogin){
    return (
      <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
        <Group>
          <Title>Sign in using emailed code</Title>
          <form onSubmit={signInForm.onSubmit((values) => handleSubmit(values.email, values.code))}>        
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
      </AppShell>
    );
  }else{
  return(
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <Group>
        <Title>Request code email</Title>
        <form onSubmit={sendEmailForm.onSubmit((values) => handleSubmit(values.email))}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...sendEmailForm.getInputProps('email')}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Group>
    </AppShell>
  )}
  
}