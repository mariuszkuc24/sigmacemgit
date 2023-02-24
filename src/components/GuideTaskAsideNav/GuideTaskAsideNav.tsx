import "./GuideTaskAsideNav.scss";
import GuideTaskAsideNavItem from "../GuideTaskAsideNavItem";

export interface ITaskCategory {
  taskId: string;
  taskCategory: string;
  taskContent: Array<{
    taskContentHeader: string;
    taskContentMore: string;
    taskContentLink: string;
  }>;
  taskPriority: string;
  taskSubcategory: string;
  taskTitle: string;
  taskSkuCode: string;
}

interface Props {
  navListItems: Array<{
    navListItemId: string;
    navListItemName: string;
    taskCategory: ITaskCategory[];
  }>;
}

const GuideTaskAsideNav = ({ navListItems }: Props) => (
  <aside>
    <div className="aside-nav">
      <div className="aside-nav_header">
        <h2>Spis treści</h2>
      </div>
      <nav>
        <ul className="aside-nav-container">
          {navListItems.map((listItem) => {
            return (
              <GuideTaskAsideNavItem
                key={listItem.navListItemId}
                navListName={listItem.navListItemName}
                navListItemsCategories={listItem.taskCategory}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  </aside>
);

export default GuideTaskAsideNav;
