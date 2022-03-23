import React from "react";
import { TextInput, Dropdown } from "carbon-components-react";

export interface ComponentProps {
  id?: number;
  type?:
    | "input-text"
    | "selector"
    | "input-area"
    | "date-selector"
    | "file-uploader";
  placeholder?: string;
  helperText?: string;
  //   errorMessage?: string;
  labelText?: string;
  //   action?: string;
  //   value?: string;
  variableName?: string;
  defaultDisabled?: boolean;
}

export const InputTextComponent: React.FC<ComponentProps> = (props) => {
  return (
    <TextInput
      helperText={props.helperText}
      id="input-text"
      // invalidText={props.errorMessage}
      labelText={props.labelText}
      placeholder={props.placeholder}
      // onChange={props.action}
      disabled={props.defaultDisabled}
      // value={props.value}
      variableName={props.variableName}
      light={false}
    />
  );
};
