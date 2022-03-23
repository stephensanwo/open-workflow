import React from "react";
import {
  Settings20,
  Notification20,
  User20,
  AppSwitcher20,
} from "@carbon/icons-react";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenuButton,
} from "carbon-components-react";
import ControlPanel from "./ControlPanel";
import MenuPanel from "./MenuPanel";

interface Props {
  isHeaderMenu?: boolean;
}

const StyledHeader: React.FC<Props> = ({ isHeaderMenu }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isSideNavExpanded, onClickSideNavExpand] = React.useState(false);

  const handleAppSwitcher = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isExpanded === true) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  const handleSideNav = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isSideNavExpanded === true) {
      onClickSideNavExpand(false);
    } else {
      onClickSideNavExpand(true);
    }
  };

  return (
    <div className="container">
      <Header aria-label="OpenFlow">
        {isHeaderMenu ? (
          <HeaderMenuButton
            aria-label="Open menu"
            isCollapsible
            onClick={handleSideNav}
            isActive={isSideNavExpanded}
          />
        ) : (
          <> </>
        )}
        <HeaderName href="/" prefix="">
          OpenFlow
        </HeaderName>
        <HeaderNavigation aria-label="OpenFlow">
          <HeaderMenuItem href="/flow">Flow Studio</HeaderMenuItem>
          <HeaderMenuItem href="/node">Node Designer</HeaderMenuItem>
          <HeaderMenuItem href="/workspace">Workspace</HeaderMenuItem>
          <HeaderMenuItem href="/marketplace">Marketplace</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Settings" onClick={() => {}}>
            <Settings20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Profile" onClick={() => {}}>
            <User20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Command Pallete"
            isActive
            onClick={handleAppSwitcher}
          >
            <AppSwitcher20 />
          </HeaderGlobalAction>
          <MenuPanel expanded={isSideNavExpanded} />
          <ControlPanel expanded={isExpanded} />
        </HeaderGlobalBar>
      </Header>
    </div>
  );
};

export default StyledHeader;
