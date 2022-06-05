import { HeaderPanel, Switcher, SwitcherItem } from "carbon-components-react";
import { Link } from "react-router-dom";
import { TreeView16, Flow16, EdgeNodeAlt16 } from "@carbon/icons-react";

interface Props {
  expanded: boolean;
}

const ControlPanel: React.FC<Props> = (props) => {
  return (
    <HeaderPanel expanded={props.expanded}>
      <Switcher>
        <SwitcherItem>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "Center",
              gap: "40px",
            }}
          >
            <TreeView16 /> OpenFlow Home
          </Link>
        </SwitcherItem>
        <SwitcherItem>
          <Link
            to="/flow"
            style={{
              display: "flex",
              alignItems: "Center",
              gap: "40px",
            }}
          >
            <Flow16 /> Flow Studio
          </Link>
        </SwitcherItem>
        <SwitcherItem>
          <Link
            to="/node"
            style={{
              display: "flex",
              alignItems: "Center",
              gap: "40px",
            }}
          >
            <EdgeNodeAlt16 /> Node Designer
          </Link>
        </SwitcherItem>
      </Switcher>
    </HeaderPanel>
  );
};

export default ControlPanel;
