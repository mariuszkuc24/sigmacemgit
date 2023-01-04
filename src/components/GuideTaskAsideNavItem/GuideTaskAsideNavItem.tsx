import { MouseEventHandler, useState } from "react";
// import "./GuideTaskAsideNav.scss";
interface NavListItems {
  navListItemName: string;
  navListItemId: string;
}
interface Props {
  navListName: string;
  navListItems: NavListItems[];
}
const GuideTaskAsideNavItem = ( props: Props) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);



  };
  const navListItems = props.navListItems;
  console.log("show",navListItems, props.navListItems);
  return (
    <li>
      <div className="dropdown" onClick={handleClick}>
        {props.navListName}{" "}
      </div>
      {isShown && (
        <div className="dropdown-content">
          <ul>
        {props.navListItems.map((d, idx) => {
              return (<li key={idx}>
                <a href={'#'+d.navListItemId}>{d.navListItemName}</a>
              </li>)})}
          </ul>
        </div>
      )}
    </li>
  );
};

export default GuideTaskAsideNavItem;
