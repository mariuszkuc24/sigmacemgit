import Container from "../UI/Containers/Container";
import ContentBlock from "../UI/Containers/ContentBlock/ContentBlock";
import "./GuideTaskListItem.scss";
const GuideTaskListItem = (props: any) => {
  return (
    <div id={props.taskId} style={{ scrollMarginTop: '95px'}}>
      {" "}
      <Container title={props.taskTitle}>
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
              {props.taskPriority ? (
                <tr>
                  <td>Priorytet:</td>
                  <td>{props.taskPriority}</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </ContentBlock>
        <ContentBlock title="Postępowanie:">No co ty?</ContentBlock>
      </Container>
    </div>
  );
};

export default GuideTaskListItem;
