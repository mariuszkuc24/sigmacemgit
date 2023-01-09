import GuideTaskListItem from "../GuideTaskListItem";
import GuideTaskAsideNav from "../GuideTaskAsideNav";
import { tasksLists } from "../mock"; 
const GuideTaskList = () => {
  // sortowanie po taskTitle
  const taskNavList = tasksLists.sort((a, b) => (a.name > b.name ? 1 : -1)).map((d) => ({
    navListItemId: d.id,
    navListItemName: d.name,
    taskCategory: d.subCategories,
  }));

  if (taskNavList.length === 0) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <GuideTaskAsideNav navListItems={taskNavList} />
      <div style={{ marginLeft: "300px" }}>
        {taskNavList.map((task) => task.taskCategory.map(category => (
          <GuideTaskListItem
            key={category.taskId}
            taskSkuCode={category.taskSkuCode}
            taskId={category.taskId}
            taskTitle={category.taskTitle}
            taskCategory={category.taskCategory}
            taskSubcategory={category.taskSubcategory}
            taskPriority={category.taskPriority}
            taskContent={category.taskContent}
          />
        )))}
      </div>
    </div>
  );
};

export default GuideTaskList;
