import React, { createContext, useState } from "react";
import { NewNodeProps } from "../../components/NodeSelector/NodeSelectorItem";

interface FlowItemContextProviderProps {
  children: React.ReactNode;
}

interface FlowItemContextType {
  nodeId: string | null;
  setNodeId: React.Dispatch<React.SetStateAction<string | null>>;
  elements: Array<NewNodeProps>;
  setElements: React.Dispatch<React.SetStateAction<Array<NewNodeProps>>>;
  elementsMetadata: {
    LastNodePositionY: number;
    lastNodeId: number;
    flowWindowCenter: number;
  };
  setElementsMetadata: React.Dispatch<React.SetStateAction<Object | any>>;
}

export const FlowItemContext = createContext({} as FlowItemContextType);

export const FlowItemContextProvider = ({
  children,
}: FlowItemContextProviderProps) => {
  const [nodeId, setNodeId] = useState<string | null>("1");
  // calculate the screen size, get the flow tree width(45%) then deduct paddings
  const flowWindowCenter =
    ((window.outerWidth - window.outerWidth * 0.07) * 0.45) / 2 - 280 / 2;

  const [elementsMetadata, setElementsMetadata] = useState({
    LastNodePositionY: 0,
    lastNodeId: 0,
    flowWindowCenter: flowWindowCenter,
  });

  const [elements, setElements] = useState<any>([]);

  return (
    <FlowItemContext.Provider
      value={{
        nodeId,
        setNodeId,
        elements,
        setElements,
        elementsMetadata,
        setElementsMetadata,
      }}
    >
      {children}
    </FlowItemContext.Provider>
  );
};

// {
//   id: "1",
//   type: "input",
//   data: {
//     label: "File Input",
//     description: "Load CSV from One Drive",
//     state: "open",
//   },
//   code: `function addNode1(a, b) {\n  return a + b;\n}`,
//   position: { x: flowWindowCenter, y: 50 },
//   className: "input-node",
// },
// {
//   id: "2",
//   type: "input",
//   data: {
//     label: "File Input",
//     description: "Load CSV from One Drive",
//     state: "running",
//   },
//   code: `function addNode2(a, b) {\n  return a + b;\n}`,
//   position: { x: flowWindowCenter, y: 150 },
//   className: "input-node",
//   handle: {
//     bottom: true,
//     top: true,
//     left: true,
//     right: true,
//   },
// },
// {
//   id: "3",
//   type: "input",
//   data: {
//     label: "File Input",
//     description: "Load CSV from One Drive",
//     state: "failed",
//   },
//   code: `function addNode3(a, b) {\n  return a + b;\n}`,
//   position: { x: flowWindowCenter, y: 250 },
//   className: "input-node",
//   handle: {
//     bottom: true,
//     top: true,
//     left: true,
//     right: true,
//   },
// },
// {
//   id: "4",
//   type: "input",
//   data: {
//     label: "File Input",
//     description: "Load CSV from One Drive",
//     state: "success",
//   },
//   code: `function addNode4(a, b) {\n  return a + b;\n}`,
//   position: { x: flowWindowCenter, y: 350 },
//   className: "input-node",
//   handle: {
//     bottom: true,
//     top: true,
//     left: true,
//     right: true,
//   },
// },

// {
//   id: "e1-2",
//   source: "1",
//   target: "2",
//   animated: false,
//   label: "",
//   type: "normal-edge",
//   arrowHeadType: "arrowclosed",
//   labelBgStyle: { fill: "#f4f4f4", color: "#fff" },
// },
// {
//   id: "e1-3",
//   source: "1",
//   target: "3",
//   animated: false,
//   label: "",
//   type: "normal-edge",
//   arrowHeadType: "arrowclosed",
//   labelBgStyle: { fill: "#f4f4f4", color: "#fff" },
// },

// {
//   id: "e3-4",
//   source: "3",
//   target: "4",
//   animated: false,
//   type: "normal-edge",
//   label: "",
//   arrowHeadType: "arrowclosed",
//   labelBgStyle: { fill: "#f4f4f4", color: "#fff" },
// },
