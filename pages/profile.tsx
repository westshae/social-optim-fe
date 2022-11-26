import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { AppShell } from '@mantine/core';
import Header from './components/Header';
import { useRouter } from 'next/router';
import { isLoggedIn } from './interactions/auth';


export default function Profile() {
  const [displayPage, setDisplayPage] = useState(false);
  useEffect(() => {
    let result = isLoggedIn();
    if(result) setDisplayPage(result);
  }, []);

  const Router = useRouter();

  if(displayPage){
    return (
      <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
        <h1>Profile</h1>
      </AppShell>
    );
  } else {
    Router.push("/auth");
  }
}