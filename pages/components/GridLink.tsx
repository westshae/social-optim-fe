import { Center, createStyles, Group, Header, Title, Text, Image} from "@mantine/core";
import LoginOutButton from "./LoginOutButton";

const useStyles = createStyles((theme) => ({
  text:{
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {

  }
}));

interface GridLinkProps {
  text: string,
  imgSrc: string,
}

const GridLink = (props:GridLinkProps) => {
  const { classes, cx } = useStyles();
  return(
    <Group>
      <Title className={classes.text}>{props.text}</Title>
      <Image className={classes.image} src={props.imgSrc}/>
    </Group>
  );
};

export default GridLink;