import "./GuideTaskAsideNav.scss";
import GuideTaskAsideNavItem from "../GuideTaskAsideNavItem/GuideTaskAsideNavItem";
interface NavListItems {
  navListItemName: string;
  navListItemId: string;
  taskCategory: string;
}
interface navList {
  navListItemName: string;
  navListItemId: string;
}
interface Props {
  navListItems: NavListItems[];
}

const GuideTaskAsideNav = (props: Props) => {
  const navList = props.navListItems;
  console.log("avc1:", navList);
  // const navList = [
  //   {
  //     navListName: "Asortymenta",
  //     navListItems: [
  //       {
  //         navListItemName: "Cesja1",
  //         navListItemId: "",
  //       },
  //       {
  //         navListItemName: "Cesjaq",
  //         navListItemId: "",
  //       },
  //       {
  //         navListItemName: "Cesjaz",
  //         navListItemId: "",
  //       },
  //     ],
  //   },
  //   {
  //     navListName: "Asortymentaz",
  //     navListItems: [
  //       {
  //         navListItemName: "Cesja",
  //         navListItemId: "",
  //       },
  //       {
  //         navListItemName: "Cesjaa",
  //         navListItemId: "",
  //       },
  //       {
  //         navListItemName: "Cesjaaaaa",
  //         navListItemId: "",
  //       },
  //     ],
  //   },
  // ];
  return (
    <aside>
      <div className="aside-nav">
        <nav>
          <ul className="aside-nav-container">
          <GuideTaskAsideNavItem
                  navListName='Asortyment'
                  navListItems={navList}
                ></GuideTaskAsideNavItem>
            {/* {navList.map((d: any, idx: any) => {
              console.log(d.navListItemId, d.navList);
              return (
                <GuideTaskAsideNavItem
                  key={idx}
                  navListName='Asortyment'
                  navListItems={d.navListItems}
                ></GuideTaskAsideNavItem>
              );
            })} */}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default GuideTaskAsideNav;
