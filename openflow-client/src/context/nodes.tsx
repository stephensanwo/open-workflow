import React, { createContext, useState } from "react";
import { NewNodeProps } from "../pages/Node/NewNode";
import nodeStore from "./node.json";

interface NodeContextProviderProps {
  children: React.ReactNode;
}

interface NodeContextType {
  nodes: Array<NewNodeProps>;
  setNodes:
    | React.Dispatch<React.SetStateAction<Array<NewNodeProps>>>
    | React.Dispatch<React.SetStateAction<NewNodeProps>>
    | any;
  nodeId: string | null;
  setNodeId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const NodeContext = createContext({} as NodeContextType);

export const NodeContextProvider = ({ children }: NodeContextProviderProps) => {
  const [nodeId, setNodeId] = useState<string | null>("");
  const [nodes, setNodes] = useState<Array<any>>(nodeStore);

  console.log(nodes);
  return (
    <NodeContext.Provider
      value={{
        nodes,
        setNodes,
        nodeId,
        setNodeId,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
};
