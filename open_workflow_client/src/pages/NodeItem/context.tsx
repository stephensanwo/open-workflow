import React, { createContext, useState } from "react";

interface NodeItemContextProviderProps {
  children: React.ReactNode;
}

interface NodeItemContextType {
  components: Array<Object>;
  setComponents: React.Dispatch<React.SetStateAction<Array<Object>>>;
}

export const NodeItemContext = createContext({} as NodeItemContextType);

export const NodeItemContextProvider = ({
  children,
}: NodeItemContextProviderProps) => {
  const [components, setComponents] = useState<any>([]);

  return (
    <NodeItemContext.Provider
      value={{
        components,
        setComponents,
      }}
    >
      {children}
    </NodeItemContext.Provider>
  );
};
