import "./Panel.scss";
const Panel = (props: any) => {
<<<<<<< HEAD
  return <div className="panel">
=======
  const classes = "panel " + props.className || "";
  return <div className={classes}>
>>>>>>> a3a0a0df8be14f8caeecc021b8bf18d84f266da9
    <div className="panel-title">
        <h2>{props.title}</h2>
    </div>
    <div className="panel-content">
        {props.children}
    </div>
  </div>;
};

export default Panel;
