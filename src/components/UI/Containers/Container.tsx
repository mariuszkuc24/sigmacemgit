import "./Container.scss";

const Container = (props: any) => {
<<<<<<< HEAD
  return (
    <section className="content-card ">
      <div className="content-card__header" >
=======
  const classes = "content-card " + props.className;
  const classesH = "content-card__header " + props.headerStyling;
  return (
    <section className={classes}>
      <div className={classesH}>
>>>>>>> a3a0a0df8be14f8caeecc021b8bf18d84f266da9
        <h2>{props.title}</h2>
      </div>
      <div className="content-card__content">{props.children}</div>
    </section>
  );
};

export default Container;
