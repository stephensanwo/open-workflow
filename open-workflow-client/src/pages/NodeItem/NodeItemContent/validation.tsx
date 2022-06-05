import { ComponentProps } from "../Components";

export interface errorProps {
  placeholder?: string;
  labelText?: string;
  helperText?: string;
  variableName?: string;
}

export const validateComponentInput = (newComponent: ComponentProps) => {
  let res: errorProps = {};
  if (
    !Object.keys(newComponent).includes("placeholder") ||
    newComponent.placeholder === ""
  ) {
    res.placeholder = "Placeholder of your component cannot be empty";
  }
  if (
    !Object.keys(newComponent).includes("variableName") ||
    newComponent.variableName === ""
  ) {
    res.variableName = "Variable name of your component cannot be empty";
  }

  if (
    !Object.keys(newComponent).includes("labelText") ||
    newComponent.labelText === ""
  ) {
    res.labelText = "Label of your component cannot be empty";
  }

  if (
    !Object.keys(newComponent).includes("helperText") ||
    newComponent.helperText === ""
  ) {
    res.helperText = "Helper text of your component cannot be empty";
  }

  if (Object.keys(res).length === 0) {
    return {};
  } else {
    return res;
  }
};
