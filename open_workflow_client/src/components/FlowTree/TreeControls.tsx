import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "carbon-components-react";
import { StateColors } from "../../shared/themes";
import {
  TreeViewAlt16,
  Save16,
  EdgeNodeAlt16,
  Delete16,
  Time16,
  Download16,
} from "@carbon/icons-react";
import Settings from "./Settings";

const TreeControlsDiv = styled.div`
  height: 40px;
  padding-left: 10px;
  padding-bottom: 10px;
  display: flex;
  gap: 2.5px;
  width: 100%;
`;

export interface ControlModalProps {
  label: string;
  description: string;
  icon: React.ReactElement;
  key: string;
  triggerModal: boolean;
}
const controlPanel: Array<ControlModalProps> = [
  {
    label: "Save",
    description: "Save Flow",
    icon: <Save16 fill={StateColors.open} />,
    key: "1",
    triggerModal: false,
  },
  {
    label: "Nodes",
    description: "Node Settings",
    icon: <EdgeNodeAlt16 fill={StateColors.open} />,
    key: "2",
    triggerModal: true,
  },
  {
    label: "Edges",
    description: "Edge Settings",
    icon: <TreeViewAlt16 fill={StateColors.open} />,
    key: "3",
    triggerModal: true,
  },
  {
    label: "Delete",
    description: "Delete Flow",
    icon: <Delete16 fill={StateColors.failed} />,
    key: "4",
    triggerModal: true,
  },
  {
    label: "Schedule",
    description: "Schedule Flow",
    icon: <Time16 fill={StateColors.failed} />,
    key: "5",
    triggerModal: true,
  },
  {
    label: "Download",
    description: "Download Flow",
    icon: <Download16 fill={StateColors.failed} />,
    key: "6",
    triggerModal: true,
  },
];

const TreeControls: React.FC = () => {
  const [modal, setModal] = useState("");
  const [selectedModal, setSelectedModal] = useState<ControlModalProps | any>();
  const toggleModal = (item?: Object, triggerModal?: boolean) => {
    console.log(item);
    if (modal === "" && triggerModal === true) {
      setModal("is-visible");
      setSelectedModal(item);
    } else {
      setModal("");
    }
  };

  return (
    <TreeControlsDiv>
      {controlPanel.map((item) => (
        <Button
          kind="secondary"
          size="small"
          iconDescription={item.description}
          hasIconOnly
          key={item.key}
          onClick={() => toggleModal(item, item.triggerModal)}
        >
          {item.icon}
          <small style={{ marginLeft: "0.5rem", color: "#fff" }}>
            {item.label}
          </small>
        </Button>
      ))}
      <Settings
        modal={modal}
        toggleModal={toggleModal}
        selectedModal={selectedModal}
      />
    </TreeControlsDiv>
  );
};

export default TreeControls;
