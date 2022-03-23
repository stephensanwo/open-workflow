import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NodeContext } from "../../../context/nodes";
import { Button, TextInput } from "carbon-components-react";
import { Add16, Code32 } from "@carbon/icons-react";
import { StateColors } from "../../../shared/themes";
import NewComponent from "./NewComponent";
import { ComponentProps } from "../Components";
import { Heading5 } from "../../../shared/layout";
import ActionButton from "../../../components/ActionButton";

const ComponentEditorDiv = styled.div`
  height: 95%;
  width: 39%;
  /* padding: 20px; */
  /* background-color: #262626; */
`;

const ComponentEditor = () => {
  const { pathname } = useLocation();
  const nodeData = useContext(NodeContext);
  const nodeItemData = nodeData.nodes.filter(
    (item) => item.link === pathname
  )[0];

  const [modal, setModal] = useState("");

  const toggleModal = () => {
    if (modal === "") {
      setModal("is-visible");
    } else {
      setModal("");
    }
  };

  console.log(nodeItemData);

  const handleDelete = (id: any) => {
    let updatedNodes = nodeData.nodes;
    console.log(id);
    updatedNodes.filter((component) => component.id !== id.toString());

    nodeData.setNodes([...updatedNodes]);
  };

  return (
    <ComponentEditorDiv>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <small>Build your component node</small>
          <Heading5 theme="dark">{nodeItemData.name}</Heading5>
        </div>

        <div>
          <Button
            kind="primary"
            size="small"
            iconDescription={"Add component"}
            hasIconOnly
            onClick={() => toggleModal()}
          >
            <small style={{ marginRight: "0.5rem", color: "#fff" }}>
              Add component
            </small>
            <Add16 />
          </Button>
        </div>
      </div>
      <div>
        {nodeItemData.components?.length === 0 ? (
          <div
            style={{
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <Code32
              fill={StateColors.running}
              style={{ width: "80px", height: "80px" }}
            />
            <p style={{ color: StateColors.running }}>
              Add new component to start
            </p>
          </div>
        ) : (
          <div
            style={{
              marginTop: "40px",
            }}
          >
            {nodeItemData.components.map(
              (component: ComponentProps, index: any) => (
                <div
                  style={{
                    marginBottom: "1rem",
                    // border: "0.1px dashed #4589ff",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    backgroundColor: "#262626",
                    cursor: "pointer",
                    padding: "20px",
                    position: "relative",
                  }}
                  key={index}
                >
                  {component.type === "input-text" ? (
                    <Fragment>
                      <TextInput
                        helperText={component.helperText}
                        id={component.id}
                        labelText={component.labelText}
                        placeholder={component.placeholder}
                        disabled={true}
                        style={{ backgroundColor: "#333333" }}
                      />
                    </Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}
                  <div
                    style={{
                      width: "60px",
                      height: "30px",
                      position: "absolute",
                      top: "15%",
                      right: "0%",
                      transform: "translate(-50%, -50%)",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <ActionButton
                      actionType="edit"
                      onClick={() => toggleModal()}
                    />

                    <ActionButton
                      actionType="delete"
                      onClick={() => handleDelete(component.id)}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      <NewComponent modal={modal} toggleModal={toggleModal} />
    </ComponentEditorDiv>
  );
};

export default ComponentEditor;
