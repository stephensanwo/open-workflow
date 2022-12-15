import React, { useContext } from "react";
import styled from "styled-components";
import { FlowItemContext } from "../../pages/FlowItem/context";
import { CustomComponentNode } from "../FlowNode";

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  updateEdge,
} from "react-flow-renderer";
import TreeControls from "./TreeControls";

const nodeTypes = {
  input: CustomComponentNode,
};

const FlowTreeDiv = styled.div`
  height: 95%;
  width: 100%;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const FlowTree = () => {
  //   const [elements, setElements] = useState(initialElements);
  const flowData = useContext(FlowItemContext);

  const onElementsRemove = (elementsToRemove: object) =>
    flowData.setElements((els: any) => removeElements(elementsToRemove, els));

  const onEdgeUpdate = (oldEdge: any, newConnection: any) =>
    flowData.setElements((els: any) => updateEdge(oldEdge, newConnection, els));

  const onConnect = (params: object) =>
    flowData.setElements((els: any) => addEdge(params, els));

  const onLoad = (reactFlowInstance: any) =>
    reactFlowInstance.setTransform({
      x: 0,
      y: 0,
      zoom: 1,
    });

  return (
    <FlowTreeDiv>
      <TreeControls />
      <ReactFlowProvider>
        <ReactFlow
          elements={flowData.elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          onLoad={onLoad}
          snapToGrid={false}
          snapGrid={[15, 15]}
          nodeTypes={nodeTypes}
          onEdgeUpdate={onEdgeUpdate}
        >
          <div>
            <Controls />
          </div>
        </ReactFlow>
      </ReactFlowProvider>
    </FlowTreeDiv>
  );
};

export default FlowTree;
