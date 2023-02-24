import { useState } from "react";
import { ITaskCategory } from "../GuideTaskAsideNav/GuideTaskAsideNav";
import arrowImg from "../../assets/images/arrow.svg";
import "./GuideTaskAsideNavItem.scss";

interface Props {
  navListName: string;
  navListItemsCategories: ITaskCategory[];
}

const GuideTaskAsideNavItem = ({
  navListName,
  navListItemsCategories,
}: Props) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  return (
    <li>
      <div className="dropdown" onClick={handleClick}>
        <div className={!isShown ? "arrow-img" : "arrow-img rotated"}>
          <img src={arrowImg} />
        </div>
        {navListName}{" "}
      </div>
      {isShown && (
        <div className="dropdown-content">
          <ul>
            {navListItemsCategories.map((category) => {
              return (
                <li key={category.taskId}>
                  <a href={`#${category.taskId}`}>{category.taskTitle}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

export default GuideTaskAsideNavItem;
