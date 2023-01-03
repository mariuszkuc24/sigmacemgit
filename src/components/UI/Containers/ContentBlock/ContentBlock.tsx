import "./ContentBlock.scss";

const ContentBlock = (props: any) => {
  return (
    <div className='content_block'>
      <div className='content_block_header'>
        <h3>{props.title}</h3>
      </div>
      <div className="content_block_more">{props.children}</div>
    </div>
  );
};

export default ContentBlock;