import React, { createContext, useState } from "react";
import { NewFlowProps } from "../pages/Flow/NewFlow";
import flowStore from "./flow.json";

interface FlowContextProviderProps {
  children: React.ReactNode;
}

interface FlowContextType {
  flows: Array<NewFlowProps>;
  setFlows:
    | React.Dispatch<React.SetStateAction<Array<NewFlowProps>>>
    | React.Dispatch<React.SetStateAction<NewFlowProps>>
    | any;
  flowId: string | null;
  setFlowId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const FlowContext = createContext({} as FlowContextType);

export const FlowContextProvider = ({ children }: FlowContextProviderProps) => {
  const [flowId, setFlowId] = useState<string | null>("");
  const [flows, setFlows] = useState<any>(flowStore);

  return (
    <FlowContext.Provider
      value={{
        flows,
        setFlows,
        flowId,
        setFlowId,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};
