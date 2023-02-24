import "./Panel.scss";
const Panel = (props: any) => {
  const classes = "panel " + props.className || "";
  return <div className={classes}>
    <div className="panel-title">
        <h2>{props.title}</h2>
    </div>
    <div className="panel-content">
        {props.children}
    </div>
  </div>;
};

export default Panel;
