import React, { useState, useContext } from "react";
import { Close32 } from "@carbon/icons-react";
import { Form, TextInput } from "carbon-components-react";
import { FlowContext } from "../../context/flow";

interface ModalProps {
  modal: string;
  toggleModal: React.Dispatch<React.SetStateAction<any>>;
}

export interface NewFlowProps {
  id: string;
  name: string;
  description: string;
  created_by: string;
  created_on: string;
  nodes?: number;
  edges?: number;
  state: "open" | "running" | "success" | "failed" | "warning";
  last_edit?: string;
  link?: string;
}

const NewFlow: React.FC<ModalProps> = (props) => {
  const [newFlow, setNewFlow] = useState<any>();
  const flowData = useContext(FlowContext);
  const DateNow = Date.now();
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    props.toggleModal(e);
  };

  // Temporary handle default variables. To be provided by the server.
  const handleChange = (e: any) => {
    setNewFlow({
      ...newFlow,
      id: Math.random().toString(),
      created_by: "Stephen Sanwo",
      created_on: new Date(DateNow).toString(),
      last_edit: new Date(DateNow).toString(),
      nodes: 0,
      edges: 0,
      state: "open",
      link: `/flow/${e.target.id === "name" ? e.target.value : ""}`,
      [e.target.id]: e.target.value,
    });

    console.log(newFlow);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    flowData.setFlows([...flowData.flows, newFlow]);
    console.log(flowData);
    props.toggleModal(e);
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
            Flow Studio
          </p>
          <p
            className="bx--modal-header__heading bx--type-beta"
            id="modal-lokx1olb9q-heading"
          >
            <h2>Create New Flow</h2>
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
              <TextInput
                helperText=""
                id="name"
                invalidText="Invalid error message."
                labelText="Flow Name"
                placeholder="Name your flow"
                onChange={handleChange}
              />
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <TextInput
                helperText=""
                id="description"
                invalidText="Invalid error message."
                labelText="Flow Description"
                placeholder="Brief description of your flow"
                onChange={handleChange}
              />
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <TextInput
                helperText=""
                id="created_on"
                invalidText="Invalid error message."
                labelText="Created On"
                placeholder={new Date(DateNow).toString()}
                onChange={handleChange}
                disabled={true}
                value={new Date(DateNow).toString()}
              />
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <TextInput
                helperText=""
                id="created_by"
                invalidText="Invalid error message."
                labelText="Created By"
                placeholder={"Stephen Sanwo"}
                onChange={handleChange}
                disabled={true}
                value={"Stephen Sanwo"}
              />
            </div>
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
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFlow;
