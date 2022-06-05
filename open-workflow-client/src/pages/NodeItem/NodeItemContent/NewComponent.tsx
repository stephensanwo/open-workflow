import React, { useState, useContext, Fragment } from "react";
import { Close32 } from "@carbon/icons-react";
import { useLocation } from "react-router-dom";
import { Form, TextInput, Dropdown } from "carbon-components-react";
import { ComponentProps, InputTextComponent } from "../Components";
import { NodeContext } from "../../../context/nodes";
import { errorProps, validateComponentInput } from "./validation";
import { ThemeColors } from "../../../shared/themes";

interface ModalProps {
  modal: string;
  toggleModal: React.Dispatch<React.SetStateAction<any>>;
}

export const nodeItemCategory = [
  {
    id: "input-text",
    label: "Basic Text Input",
  },

  {
    id: "input-area",
    label: "Long Text Input",
  },
  {
    id: "input-number",
    label: "Number Input",
  },
  {
    id: "input-secret",
    label: "Secrets Input",
  },
  {
    id: "selector",
    label: "Dropdown Selector",
  },

  {
    id: "date-selector",
    label: "Date Selector",
  },
  {
    id: "file-uploader",
    label: "File Uploader",
  },
];

const NewComponent: React.FC<ModalProps> = (props) => {
  const { pathname } = useLocation();
  const nodeData = useContext(NodeContext);
  //   const nodeItemData = nodeData.nodes.filter(
  //     (item) => item.link === pathname
  //   )[0];

  const [newComponent, setNewComponent] = useState<ComponentProps>({});
  const [componentError, setComponentError] = useState("");
  const [validationErrors, setValidationErrors] = useState<errorProps>({});

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    props.toggleModal(e);
  };

  let id = 0;
  const handleSelect = (e: any) => {
    setNewComponent({
      ...newComponent,
      id: id++,
      type: e.selectedItem.id,
    });

    console.log(newComponent);
    console.log(componentError);
    setComponentError("");
  };

  const handleChange = (e: any) => {
    setNewComponent({
      ...newComponent,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    if (Object.keys(newComponent).length === 0) {
      setComponentError(
        "Select at least one component type to proceed or cancel"
      );
    } else {
      setComponentError("");
    }

    if (componentError === "") {
      const err = validateComponentInput(newComponent);
      if (Object.keys(err).length === 0) {
        let updatedNodes = nodeData.nodes;
        updatedNodes.map((node) => {
          if (node.link === pathname) {
            return node.components.push(newComponent);
          }
        });

        nodeData.setNodes([...updatedNodes]);

        props.toggleModal(e);
      } else {
        setValidationErrors(err);
      }
    }
  };

  return (
    <div
      data-modal
      id="disabled-modal"
      className={`bx--modal ${props.modal}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disabled-label"
      aria-describedby="disabled-heading"
      tabIndex={-1}
    >
      <div className="bx--modal-container bx--modal-container-mediumscreen">
        <div className="bx--modal-header">
          <p
            className="bx--modal-header__label bx--type-delta"
            id="modal-lokx1olb9q-label"
          >
            Node Designer
          </p>
          <p
            className="bx--modal-header__heading bx--type-beta"
            id="modal-lokx1olb9q-heading"
          >
            <h2>Add New Component</h2>
          </p>
          <button
            className="bx--modal-close"
            type="button"
            data-modal-close
            aria-label="close modal"
            onClick={(e) => props.toggleModal(e)}
          >
            <Close32 className="bx--modal-close__icon" />
          </button>
        </div>

        <div className="bx--modal-content">
          <Form>
            <div style={{ marginBottom: "2rem" }}>
              <Dropdown
                ariaLabel="Dropdown"
                items={nodeItemCategory}
                label="Select Component Type"
                onChange={handleSelect}
                invalid={componentError === "" ? false : true}
                invalidText={componentError}
                light={false}
              />
            </div>
            {Object.keys(newComponent).length === 0 ? (
              <Fragment></Fragment>
            ) : (
              <Fragment>
                <div
                  style={{
                    border: "1px dashed #999",
                    marginBottom: "2rem",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: `${ThemeColors.bgSecondary}`,
                    padding: "10px",
                  }}
                >
                  {newComponent.type === "input-text" ? (
                    <div style={{ width: "100%" }}>
                      <InputTextComponent
                        placeholder={newComponent.placeholder}
                        helperText={newComponent.helperText}
                        labelText={newComponent.labelText}
                        defaultDisabled={true}
                      />
                    </div>
                  ) : (
                    <div>
                      <p style={{ color: "#999" }}>
                        Preview not available for this component type
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <TextInput
                    helperText=""
                    id="variableName"
                    invalid={
                      Object.keys(validationErrors).includes("variableName")
                        ? true
                        : false
                    }
                    invalidText={validationErrors.variableName}
                    labelText="Component Variable Name *"
                    placeholder={
                      "Give your component a variable name. This will be used in your code"
                    }
                    onChange={handleChange}
                    disabled={false}
                  />
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <TextInput
                    helperText=""
                    id="labelText"
                    invalid={
                      Object.keys(validationErrors).includes("labelText")
                        ? true
                        : false
                    }
                    invalidText={validationErrors.labelText}
                    labelText="Component Name *"
                    placeholder={"Give your component a name"}
                    onChange={handleChange}
                    disabled={false}
                  />
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <TextInput
                    helperText=""
                    id="placeholder"
                    invalid={
                      Object.keys(validationErrors).includes("placeholder")
                        ? true
                        : false
                    }
                    invalidText={validationErrors.placeholder}
                    labelText="Component Placeholder *"
                    placeholder={"Give your component a placeholder text"}
                    onChange={handleChange}
                    disabled={false}
                  />
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <TextInput
                    helperText=""
                    id="helperText"
                    invalid={
                      Object.keys(validationErrors).includes("helperText")
                        ? true
                        : false
                    }
                    invalidText={validationErrors.helperText}
                    labelText="Component helperText *"
                    placeholder={"Give your component a helper text"}
                    onChange={handleChange}
                    disabled={false}
                  />
                </div>
              </Fragment>
            )}
          </Form>
        </div>
        <div className="bx--modal-footer">
          <button
            className="bx--btn bx--btn--secondary"
            type="button"
            data-modal-close
            onClick={(e) => handleClose(e)}
          >
            Cancel
          </button>
          <button
            className="bx--btn bx--btn--primary"
            type="submit"
            data-modal-primary-focus
            onClick={(e) => handleSubmit(e)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
