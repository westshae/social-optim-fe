import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
    </AppShell>
  );
}
