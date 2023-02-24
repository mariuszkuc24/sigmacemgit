import "./Panel.scss";
const Panel = (props: any) => {
  return <div className="panel">
    <div className="panel-title">
        <h2>{props.title}</h2>
    </div>
    <div className="panel-content">
        {props.children}
    </div>
  </div>;
};

export default Panel;
