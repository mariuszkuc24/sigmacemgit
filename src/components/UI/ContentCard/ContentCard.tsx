import "./ContentCard.scss";

const ContentCard = (props: any) => {
  const classes = "content-card " + props.className;
  const classesH = "content-card__header " + props.headerStyling;
  return (
    <section className={classes}>
      <div className={classesH}>
        <h2>{props.header}</h2>
      </div>
      <div className="content-card__content">{props.children}</div>
    </section>
  );
};

export default ContentCard;
