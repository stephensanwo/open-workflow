import React from "react";
import {
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
} from "carbon-components-react";
import {
  CrossTab16,
  MachineLearningModel16,
  DataBase16,
} from "@carbon/icons-react";

interface Props {
  expanded: boolean;
}

const MenuPanel = (props: Props) => {
  return (
    <SideNav
      isFixedNav
      expanded={props.expanded}
      isChildOfHeader={true}
      aria-label="Side navigation"
      style={{ paddingTop: "60px" }}
    >
      <h5 style={{ color: "#000", paddingLeft: "20px" }}>Categories</h5>
      <SideNavItems>
        <SideNavMenu renderIcon={DataBase16} title="Database and File">
          <SideNavMenuItem aria-current="page" href="/">
            SQL Databases
          </SideNavMenuItem>
          <SideNavMenuItem href="/">NoSQL Databses</SideNavMenuItem>
          <SideNavMenuItem href="/">Data Warehouse</SideNavMenuItem>
          <SideNavMenuItem href="/">S3 Storage</SideNavMenuItem>
          <SideNavMenuItem href="/">Cloud Sources</SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu renderIcon={CrossTab16} title="Data Manipulation">
          <SideNavMenuItem href="/">Pandas</SideNavMenuItem>
          <SideNavMenuItem href="/">Spark</SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu
          renderIcon={MachineLearningModel16}
          title="Machine Learning"
        >
          <SideNavMenuItem href="/">NLP Models</SideNavMenuItem>
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  );
};

export default MenuPanel;
