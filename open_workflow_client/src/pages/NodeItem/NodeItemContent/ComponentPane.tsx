import React, { Fragment, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NodeContext } from "../../../context/nodes";
import { Heading5 } from "../../../shared/layout";
import Code from "../../../components/Code";
import { ComponentProps } from "../Components";
import { Tag } from "carbon-components-react";
import { nodeItemCategory } from "./NewComponent";

const ComponentPaneDiv = styled.div`
  height: 95%;
  width: 60%;
  padding: 20px;
  background-color: #262626;
`;

const ComponentPane = () => {
  const { pathname } = useLocation();
  const nodeData = useContext(NodeContext);
  const nodeItemData = nodeData.nodes.filter(
    (item) => item.link === pathname
  )[0];
  console.log(nodeItemData);

  const [codeData, setCodeData] = useState<any>();

  useEffect(() => {
    if (nodeItemData.code?.length === 0) {
      setCodeData(`"""\n Language: Python3 \n Variable names:\n${nodeItemData.components
        .map((item: ComponentProps) => ` - ${item.variableName},\n`)
        .join("")}\n"""\n\n#Your code starts here\ndef main():\n  return none
      `);
    } else {
      setCodeData(nodeItemData.code);
    }
  }, [nodeItemData]);

  // const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCodeData(event.target.value);
  //   console.log(codeData);
  // };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let updatedNodes = nodeData.nodes;
    updatedNodes.map((node) => {
      if (node.link === pathname) {
        return (node.code = event.target.value);
      }
    });
    nodeData.setNodes([...updatedNodes]);
  };

  return (
    <ComponentPaneDiv>
      <small> Customize your components</small>
      <Heading5 theme="dark">Component Options</Heading5>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
          paddingTop: "10px",
          borderTop: "1px solid #525252",
        }}
      >
        <small style={{ color: "#fff" }}>Variables</small>
        <div>
          {nodeItemData.components.map(
            (component: ComponentProps, index: string) => (
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
            )
          )}
        </div>
      </div>

      <Code
        codeData={nodeItemData.code}
        handleCodeChange={handleCodeChange}
        placeholder={
          "Python 3.10.1 (v3.10.1:2cd268a3a9, Dec  6 2021, 14:28:59) [Clang 13.0.0 (clang-1300.0.29.3)] on darwin"
        }
        style={{
          fontSize: "14px",
          lineHeight: "20px",
          color: "#fff",
          // backgroundColor: "#f4f4f4",
          fontFamily: "IBM Plex Mono",
          minHeight: "600px",
          width: "100%",
        }}
      />
    </ComponentPaneDiv>
  );
};

export default ComponentPane;
