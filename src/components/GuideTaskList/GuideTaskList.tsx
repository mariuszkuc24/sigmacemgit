import { BrowserRouter, Link } from "react-router-dom";
import GuideTaskListItem from "../GuideTaskListItem/GuideTaskListItem";
import GuideTaskAsideNav from "../GuideTaskAsideNav/GuideTaskAsideNav";

interface Type {
  category: string;
  percentage: number;
}
interface iTaskNavListItem {
  navListItemId: string;
  navListItemName: string;
  taskCategory: string;
}

interface iTaskNavList {
  data: Array<iTaskNavListItem>;
}
const GuideTaskList = () => {
  const tasksLists = [
    {
      taskId: "asortyment001",
      taskTitle: "Asortyment - A",
      taskCategory: "Asortyment",
      taskSubcategory: "Dostępność",
      taskPriority: "A ja mama :D",
      taskDescription: "a",
    },
    {
      taskId: "asortyment002",
      taskTitle: "Asortyment - B",
      taskCategory: "Asortyment",
      taskSubcategory: "Dostępność",
      taskPriority: "",
      taskDescription: "a",
    },
    {
      taskId: "asortyment022",
      taskTitle: "Asortyment - C",
      taskCategory: "Asortyment",
      taskSubcategory: "Dostępność",
      taskPriority: "",
      taskDescription: "a",
    },
    {
      taskId: "asortyment003",
      taskTitle: "Asortyment - D",
      taskCategory: "Asortyment",
      taskSubcategory: "Dostępność",
      taskPriority: "",
      taskDescription: "a",
    },
    {
      taskId: "asortyment004",
      taskTitle: "Asortyment - E",
      taskCategory: "Asortyment",
      taskSubcategory: "Dostępność",
      taskPriority: "nISKI",
      taskDescription: "a",
    },
    {
      taskId: "asortyment005",
      taskTitle: "Asortyment - F",
      taskCategory: "Asortyment",
      taskSubcategory: "Dostępność",
      taskPriority: "wYSOKI",
      taskDescription: "a",
    },
  ];
  const taskNavList: iTaskNavListItem[] = [];
  tasksLists.sort((a, b) => (a.taskTitle > b.taskTitle ? 1 : -1));

  tasksLists.map((d) => {
    const obj = {
      navListItemId: d.taskId,
      navListItemName: d.taskTitle,
      taskCategory: d.taskCategory,
    };
    taskNavList.push(obj);
  });
  console.log("loged:", taskNavList);

  // sortowanie po taskTitle

  return (
    <div>
      <GuideTaskAsideNav navListItems={taskNavList}></GuideTaskAsideNav>
      <div style={{ marginLeft: "240px" }}>
        {tasksLists.map((d, idx) => {
          console.log(d.taskCategory);
          return (
            <GuideTaskListItem
              key={idx}
              taskId={d.taskId}
              taskTitle={d.taskTitle}
              taskCategory={d.taskCategory}
              taskSubcategory={d.taskSubcategory}
              taskPriority={d.taskPriority}
              taskDescription={d.taskDescription}
            ></GuideTaskListItem>
          );
        })}
      </div>
    </div>
  );
};

export default GuideTaskList;
