import { AppShell } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function Home() {

  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <h1>Dashboard</h1>
    </AppShell>
  );
}