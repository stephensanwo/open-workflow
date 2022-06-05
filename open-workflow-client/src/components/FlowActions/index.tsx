import React, { useContext, useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { FlowItemContext } from "../../pages/FlowItem/context";
// import Code from "../Code";
import { NewNodeProps as NodeSelectorProps } from "../../pages/Node/NewNode";
import { Button, TextInput, Tag } from "carbon-components-react";
import { ComponentProps } from "../../pages/NodeItem/Components";
import Notification from "../Notification";
import { Heading5 } from "../../shared/layout";

const FlowActionsDiv = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
`;

const FlowActionsHeader = styled.div`
  padding: 15px;
  margin: 0px 0px 10px 0px;
`;

const CodeComponentDiv = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 15px;
`;

const FlowActions: React.FC = () => {
  const [nodeData, setNodeData] = useState<NodeSelectorProps>();
  const nodeContext = useContext(FlowItemContext);
  const [components, setComponents] = useState<Array<ComponentProps>>([]);

  // Filter for the curent node to display its actions
  useEffect(() => {
    const nodeItem: any = nodeContext.elements.filter(
      (item: any) => item.id === nodeContext.nodeId
    )[0];
    setNodeData(nodeItem);
    setComponents(nodeItem?.components);
  }, [nodeContext.elements, nodeContext.nodeId]);

  const handleChange = (
    nodeId: string | undefined,
    componentId: string | undefined,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let updatedComponent = components.map((component) => {
      if (`${nodeData?.id}${component?.id}` === event.target.id) {
        return { ...component, value: event.target.value };
      }
      return component;
    });

    setComponents(updatedComponent);

    let updatedElement = nodeContext.elements.map((element) => {
      if (element.id === nodeId) {
        return { ...element, components: updatedComponent };
      }
      return element;
    });

    nodeContext.setElements([...updatedElement]);
  };

  return (
    <FlowActionsDiv>
      <FlowActionsHeader>
        {nodeData?.name ? (
          <Heading5 theme="dark">
            Node # {nodeData.id} - {nodeData?.name}
          </Heading5>
        ) : (
          <Heading5 theme="dark">{"Create a node to start"}</Heading5>
        )}
        <small>{nodeData?.description}</small>
      </FlowActionsHeader>
      <CodeComponentDiv>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
            paddingTop: "10px",
            borderTop: "1px solid #525252",
          }}
        >
          <small style={{ color: "#fff" }}>Variables</small>
          {components?.map((component: ComponentProps, index: number) => (
            <Tag
              key={index}
              style={{
                minWidth: "60px",
                height: "20px",
                backgroundColor:
                  component.type === "input-text"
                    ? "#66d19e"
                    : component.type === "selector"
                    ? "#66919e"
                    : component.type === "input-area"
                    ? "#66919e"
                    : component.type === "date-selector"
                    ? "#66919e"
                    : component.type === "file-uploader"
                    ? "#66919e"
                    : "",
              }}
            >
              <small style={{ color: "#000" }}>
                {`${component.id} : ${component.labelText}`}
              </small>
            </Tag>
          ))}
        </div>

        {components?.map((component: ComponentProps, index: any) => (
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
                  onChange={(event: any) =>
                    handleChange(
                      nodeData?.id.toString(),
                      component?.id?.toString(),
                      event
                    )
                  }
                  helperText={component.helperText}
                  id={`${nodeData?.id}${component?.id}`}
                  labelText={component.labelText}
                  placeholder={component.placeholder}
                  disabled={false}
                  style={{ backgroundColor: "#b5b5b5" }}
                  value={component.value}
                />
              </Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </div>
        ))}
        {/* <Code
          codeData={nodeData?.code}
          handleCodeChange={handleCodeChange}
          placeholder={"Please enter Python code."}
          style={{
            fontSize: 12,
            backgroundColor: "#f4f4f4",
            fontFamily: "IBM Plex Mono",
            minHeight: "50vh",
            width: "100%",
            border: "none",
          }}
        /> */}
        <div>
          <Notification
            title={"Runtime Errors"}
            subtitle={"Runtime errors will be displayed here"}
            lowContrast={false}
            caption={
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                {"Time: 00:00:00 AM"}
                <Button
                  kind="ghost"
                  size="small"
                  style={{ marginBotton: "100px" }}
                >
                  View Detailed Error Message
                </Button>
              </div>
            }
            kind="info"
            hideCloseButton={false}
          />
        </div>
      </CodeComponentDiv>
    </FlowActionsDiv>
  );
};

export default FlowActions;
