import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
    </AppShell>
  );
}

export const getServerSideProps = withPageAuthRequired();