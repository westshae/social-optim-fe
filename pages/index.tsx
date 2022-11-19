import { NavLink } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/dashboard">
      <NavLink label="Dashboard"/>
    </Link>
  );
}
