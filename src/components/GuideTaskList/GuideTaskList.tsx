import GuideTaskListItem from "../GuideTaskListItem/GuideTaskListItem";

const GuideTaskList = () => {
  const tasksLists = [
    {
      taskId: "asortyment001",
      taskTitle: "Asortyment - Dostępność",
      taskCategory: "Asortyment",
      taskSubcategory: "Dostępność",
      taskPriority: "",
      taskDescription: "a",
    },
    {
      taskId: "asortyment002",
      taskTitle: "Asortyment - Aostępność",
      taskCategory: "Asortyment",
      taskSubcategory: "Dostępność",
      taskPriority: "",
      taskDescription: "a",
    },
  ];
  // sortowanie po taskTitle
  tasksLists.sort((a, b) => (a.taskTitle > b.taskTitle ? 1 : -1));
  return (
    <div>
      {tasksLists.map((d, idx) => {
        console.log(d.taskCategory);
        return (
          <GuideTaskListItem
            key={idx}
            taskTitle={d.taskTitle}
            taskCategory={d.taskCategory}
            taskSubcategory={d.taskSubcategory}
            taskPriority={d.taskPriority}
            taskDescription={d.taskDescription}
          ></GuideTaskListItem>
        );
      })}
    </div>
  );
};

export default GuideTaskList;
