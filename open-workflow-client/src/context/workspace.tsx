import React, { createContext, useState } from "react";
import { NewFileProps } from "../pages/Workspace/NewFile";
import fileStore from "./workspace.json";

interface FileContextProviderProps {
  children: React.ReactNode;
}

interface FileContextType {
  files: Array<NewFileProps>;
  setFiles:
    | React.Dispatch<React.SetStateAction<Array<NewFileProps>>>
    | React.Dispatch<React.SetStateAction<NewFileProps>>
    | any;
}

export const FileContext = createContext({} as FileContextType);

export const FileContextProvider = ({ children }: FileContextProviderProps) => {
  const [files, setFiles] = useState<Array<any>>(fileStore);

  console.log(files);
  return (
    <FileContext.Provider
      value={{
        files,
        setFiles,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
