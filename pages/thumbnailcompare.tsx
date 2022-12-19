import { AppShell } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { isLoggedIn } from "./interactions/auth";

import styles from "../styles/thumbnailcompare.module.scss";

interface videoData {
  title: string,
  views: number,
  channelName: string,
  id: string,
  ratio: number
  subscribers: number;
}

export default function Home() {
  const Router = useRouter();
  const [video1, setVideo1] = useState<videoData>();
  const [video2, setVideo2] = useState<videoData>();

  useEffect(() => {
    const loginResult = isLoggedIn();
    if (!loginResult) Router.push("/auth");
  }, []);

  const multiUpload = useForm({
    initialValues: {
      json: ''
    }
  });

  return (
    <AppShell padding="md" navbar={<Navigation />} header={<Header />}>
      <div className={styles.overallcontainer}>
        <ThumbnailFrame id="OK9ZvttHFms" title="Why this pizza looks more like a dog" views={10900} channelName="MrBeast" ratio={1.5} subscribers={10000000}/>
        <ThumbnailFrame id="OK9ZvttHFms" title="title" views={10900} channelName="MrBeast" ratio={1.5} subscribers={10000000}/>
      </div>
      <div className={styles.controlpanel}>

      </div>
    </AppShell>
  );
}

const ThumbnailFrame = (props: videoData) => {
  const thumbnailLink = "https://i.ytimg.com/vi/" + props.id + "/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqGNS7g9ad8oXIsJtX3wUPtVCUEg";
  const channelLink = "https://www.youtube.com/@" + props.channelName.replace(/\s/g, "");
  return (
    <div className={styles.cardcontainer}>
      <a href={channelLink} rel="noopener noreferrer" target="_blank">
        <img src={thumbnailLink} className={styles.image} />
      </a>
      <div className={styles.textcontainer}>
        <h2>{props.title}</h2>
        <div className={styles.channeltext}>
          <p className={styles.left}>{props.channelName}</p>
          <p className={styles.right}>{props.subscribers} Followers</p>
        </div>
      </div>
    </div>
  );
};
