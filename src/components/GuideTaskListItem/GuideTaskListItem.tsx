import Container from "../UI/Containers/Container";
import ContentBlock from "../UI/Containers/ContentBlock/ContentBlock";
import "./GuideTaskListItem.scss";
interface Props {
  taskId: string;
  taskTitle: string;
  taskCategory: string;
  taskSubcategory: string;
  taskSkuCode: string;
  taskPriority: string;
  taskContent: Array<{
    taskContentHeader: string;
    taskContentMore: string;
    taskContentLink: string;
  }>;
}
const GuideTaskListItem = (props: Props) => {
  return (
    <div id={props.taskId} style={{ scrollMarginTop: "95px" }}>
      {" "}
      <Container title={props.taskCategory + " - " + props.taskTitle}>
        <ContentBlock title="Kategoryzacja:">
          <table className="guide-task-list-item-categorization">
            <tbody>
              <tr>
                <td>Kategoria:</td>
                <td>{props.taskCategory}</td>
              </tr>
              <tr>
                <td>Kategoria szczegółowa:</td>
                <td>{props.taskSubcategory}</td>
              </tr>
              {props.taskSkuCode ? (
                <tr>
                  <td>Numer SKU:</td>
                  <td>{props.taskSkuCode}</td>
                </tr>
              ) : null}
              {props.taskPriority ? (
                <tr>
                  <td>Priorytet:</td>
                  <td>{props.taskPriority}</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </ContentBlock>
        {props.taskContent.map((info, idx) => {
          return info.taskContentHeader ? (
            <ContentBlock key={idx} title={info.taskContentHeader}>
              {info.taskContentMore}
              {info.taskContentLink ? (
                <div className="guide_task_list_item_link">
                  <span>
                    Link do treści:{" "}
                    <a
                      href={info.taskContentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Przejdź
                    </a>
                  </span>
                </div>
              ) : null}
            </ContentBlock>
          ) : null;
        })}
      </Container>
    </div>
  );
};

export default GuideTaskListItem;
