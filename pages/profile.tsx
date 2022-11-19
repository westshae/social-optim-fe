import React from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import {  } from '@auth0/nextjs-auth0';
import Navigation from './components/Navigation';
import { AppShell } from '@mantine/core';
import Header from './components/Header';


export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
        <img src={user?.picture!} alt={user?.name!} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
    </AppShell>
  );
}

export const getServerSideProps = withPageAuthRequired();