import "./ColumnLinksContainer.scss";

const ColumnLinksContainer = (props: any) => {
  return (
    <div className="column_links_container_wrapper">
      <div className="column_links_container_wrapper_title">
        <h3>{props.title}</h3>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default ColumnLinksContainer;
