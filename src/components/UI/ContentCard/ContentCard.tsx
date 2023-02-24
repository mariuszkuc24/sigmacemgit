import "./ContentCard.scss";

const ContentCard = (props: any) => {
  return (
    <section className="content-card">
      <div className="content-card__header">
        <h2>{props.header}</h2>
      </div>
      <div className="content-card__content">{props.children}</div>
    </section>
  );
};

export default ContentCard;
