import styles from "../styles/ThumbnailFrame.module.css"

interface videoData {
  title: string,
  views: number,
  channelName: string,
  id: string,
  ratio: number
}

const ThumbnailFrame = (props:videoData) => {
  const thumbnailLink = "https://i.ytimg.com/vi/" + props.id + "/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqGNS7g9ad8oXIsJtX3wUPtVCUEg"
  const channelLink = "https://www.youtube.com/@" + props.channelName.replace(/\s/g,'');
  return(
    <div>
      <div>
        <a href={channelLink} rel="noopener noreferrer" target="_blank">
          <img src={thumbnailLink}/> 
        </a>
        <div className={styles.thumbnailtextbox}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.thumbnailtextbox}>
          <p>{props.views}</p>
          <p>{props.channelName}</p>
          <p>{props.ratio}</p>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailFrame;