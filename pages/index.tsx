import { NavLink } from "@mantine/core";
import Link from "next/link";
import axios, {AxiosError} from "axios";

export default function Home() {

  return (
    <Link href="/dashboard">
      <NavLink label="Dashboard"/>
    </Link>
  );
}
