import React from 'react';
import Navigation from './components/Navigation';
import { AppShell } from '@mantine/core';
import Header from './components/Header';


export default function Profile() {

  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <h1>Profile</h1>
    </AppShell>
  );
}