import React, { useContext } from "react";
import styled from "styled-components";
import NodeSelectorItem from "./NodeSelectorItem";
import { Heading5 } from "../../shared/layout";
import { NodeContext } from "../../context/nodes";

const NodeSelectorLabel = styled.div`
  margin: 0px 0px 20px 0px;
`;

const NodeSelector: React.FC = () => {
  const nodeData = useContext(NodeContext);

  return (
    <div>
      <NodeSelectorLabel>
        <Heading5 theme="dark">Node Selector</Heading5>
        <small>
          {" "}
          Build your nodes by using pre-built selectors or bring your own custom
          code.
        </small>
        <small>
          {" "}
          Visit the <a href="/">Marketplace</a> for more nodes
        </small>
      </NodeSelectorLabel>
      <div style={{ marginTop: "20px" }}>
        {nodeData.nodes?.map((node, index) => (
          <NodeSelectorItem
            id={node.id}
            name={node.name}
            description={node.description}
            created_by={node.created_by}
            created_on={node.created_on}
            state={node.state}
            last_edit={node.last_edit}
            link={node.link}
            category={node.category}
            code={node.code}
            components={node.components}
            health={node.health}
            version={node.version}
          />
        ))}
      </div>
    </div>
  );
};

export default NodeSelector;
