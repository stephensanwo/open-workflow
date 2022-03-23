import React, { useContext } from "react";
import { Handle, Position } from "react-flow-renderer";
import {
  PlayFilled24,
  Misuse24,
  CheckmarkFilled24,
  DotMark16,
} from "@carbon/icons-react";
import { InlineLoading } from "carbon-components-react";
import "./style.scss";
import { FlowItemContext } from "../../pages/FlowItem/context";
import { StateColors } from "../../shared/themes";
import { NewNodeProps } from "../NodeSelector/NodeSelectorItem";
import styled from "styled-components";

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  margin-top: 5px;
`;

const CustomComponentNode: React.FC<NewNodeProps> = ({
  id,
  data,

  position,
  handle,
}) => {
  const nodeContext = useContext(FlowItemContext);

  const handleNodeClick = (id: string) => {
    nodeContext?.setNodeId(id);
  };

  return (
    <div
      className={`node-container ${data.state}`}
      onClick={() => handleNodeClick(id)}
    >
      <div className="node-content">
        <div>
          <div className="node-label">{data.label}</div>
          <div className="node-description">
            {`${data.description}`.slice(0, 65)}
            {data.description.length > 65 ? "..." : ""}
          </div>
          <div className="node-status">
            <Description>
              <small>Run ID: {id}</small>

              <small>Run Time: 2s</small>

              <span className="styled-span">
                <small>State: </small>
                <DotMark16
                  fill={
                    data.state === "open"
                      ? StateColors.success
                      : data.state === "failed"
                      ? StateColors.failed
                      : StateColors.open
                  }
                />
                <small>{data.state}</small>
              </span>
            </Description>
          </div>
        </div>
        <div>
          {data.state === "running" ? (
            <InlineLoading />
          ) : data.state === "open" ? (
            <PlayFilled24 fill={StateColors.open} />
          ) : data.state === "success" ? (
            <CheckmarkFilled24 fill={StateColors.success} />
          ) : data.state === "failed" ? (
            <Misuse24 fill={StateColors.failed} />
          ) : (
            <PlayFilled24 fill="#1f70ff" />
          )}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ top: "100%", borderRadius: 0 }}
      />

      <Handle
        type="target"
        position={Position.Top}
        style={{ borderRadius: 0 }}
      />
    </div>
  );
};

export default CustomComponentNode;
