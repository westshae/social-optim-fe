import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <a href="/api/auth/logout">Logout</a>
      <a href="/api/auth/login">Login</a>
    </AppShell>
  );
}
