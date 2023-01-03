import { Children } from "react";
import Container from "./Container";
import './LinksContainer.scss';
const LinksContainer = (props: any) => {
  return (
    <Container
      classes={props.classes}
      headerStyling={props.headerStyling}
      title={props.title}
    >
      <div className="section-links__container">{props.children}</div>
    </Container>
  );
};

export default LinksContainer;
