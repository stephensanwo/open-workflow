import React from "react";
import {
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
} from "carbon-components-react";
import { Fade16 } from "@carbon/icons-react";

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
    >
      <SideNavItems>
        <SideNavMenu renderIcon={Fade16} title="Category title">
          <SideNavMenuItem href="/">Link</SideNavMenuItem>
          <SideNavMenuItem aria-current="page" href="/">
            Link
          </SideNavMenuItem>
          <SideNavMenuItem href="/">Link</SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu renderIcon={Fade16} title="Category title">
          <SideNavMenuItem href="/">Link</SideNavMenuItem>
          <SideNavMenuItem aria-current="page" href="/">
            Link
          </SideNavMenuItem>
          <SideNavMenuItem href="/">Link</SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu renderIcon={Fade16} title="Category title">
          <SideNavMenuItem href="/">Link</SideNavMenuItem>
          <SideNavMenuItem aria-current="page" href="/">
            Link
          </SideNavMenuItem>
          <SideNavMenuItem href="/">Link</SideNavMenuItem>
        </SideNavMenu>
        <SideNavLink renderIcon={Fade16} href="/">
          Link
        </SideNavLink>
        <SideNavLink renderIcon={Fade16} href="/">
          Link
        </SideNavLink>
      </SideNavItems>
    </SideNav>
  );
};

export default MenuPanel;
