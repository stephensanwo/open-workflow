import React, { useContext } from "react";
import { DotMark16, AddAlt16 } from "@carbon/icons-react";
import styled from "styled-components";
import { StateColors } from "../../shared/themes";
import { FlowItemContext } from "../../pages/FlowItem/context";
import { ComponentProps } from "../../pages/NodeItem/Components";
import { NewNodeProps as NodeSelectorProps } from "../../pages/Node/NewNode";

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  margin-top: 5px;
`;

const NodeSelectorItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  background-color: #262626;
  padding: 10px;
`;

// export interface NodeSelectorProps {
//   type: string;
//   data: {
//     label: string;
//     description: string;
//     version: string;
//     health: string;
//     state: "open" | "running" | "success" | "failed" | "warning";
//   };
//   code: string;
//   component?: Array<ComponentProps>;
// }

export interface NewNodeProps {
  id: string;
  category: string;
  type: string;
  name: string;
  description: string;
  data: {
    id: string;
    label: string;
    description: string;
    state: "open" | "running" | "success" | "failed" | "warning";
  };
  position: {
    x: number;
    y: number;
  };
  code?: string;
  handle?: {
    bottom: boolean;
    top: boolean;
    left: boolean;
    right: boolean;
  };
  className: string;
  source?: string;
  target?: string;
  components?: Array<ComponentProps>;
}

const NodeSelectorItem: React.FC<NodeSelectorProps> = (props) => {
  const flowData = useContext(FlowItemContext);

  const newNode: NewNodeProps = {
    id: (Number(flowData.elementsMetadata.lastNodeId) + 1).toString(),
    category: "node",
    name: props.name,
    description: props.description,
    type: "input",
    data: {
      id: props.id,
      label: props.name,
      description: props.description,
      state: props.state,
    },
    components: props.components,
    code: props.code,
    position: {
      x: flowData.elementsMetadata.flowWindowCenter,
      y: flowData.elementsMetadata.LastNodePositionY + 100,
    },
    className: "input-node",
  };

  const handleItemAdd = () => {
    flowData.setElements([...flowData.elements, newNode]);
    flowData.setElementsMetadata({
      ...flowData.elementsMetadata,
      lastNodeId: (Number(flowData.elementsMetadata.lastNodeId) + 1).toString(),
      LastNodePositionY: flowData.elementsMetadata.LastNodePositionY + 150,
    });
  };

  return (
    <NodeSelectorItemContainer>
      <div>
        <small>{props.name}</small>
        <Description>
          <small>Author: {props.created_by}</small>

          <small>Version: {props.version}</small>

          <span className="styled-span">
            <DotMark16
              fill={
                props.state === "open"
                  ? StateColors.success
                  : props.state === "failed"
                  ? StateColors.failed
                  : StateColors.open
              }
            />

            <small>{props.health}</small>
          </span>
        </Description>
      </div>
      <div style={{ cursor: "pointer" }} onClick={handleItemAdd}>
        <AddAlt16 fill={StateColors.open} />
      </div>
    </NodeSelectorItemContainer>
  );
};

export default NodeSelectorItem;
