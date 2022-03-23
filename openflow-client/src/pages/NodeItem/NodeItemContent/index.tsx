import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import { Play32 } from "@carbon/icons-react";
import { useLocation } from "react-router-dom";
import { NodeContext } from "../../../context/nodes";
import PageHeader from "../../../components/PageHeader";
import ComponentPane from "./ComponentPane";
import ComponentEditor from "./ComponentEditor";

const NodeItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 85vh;
  padding-bottom: 20px;
  /* gap: 20px; */
`;

const NodeItemContent = () => {
  const { pathname } = useLocation();
  const nodeItemData1 = useContext(NodeContext);
  console.log(nodeItemData1);
  const nodeItemData = useContext(NodeContext).nodes.filter(
    (item) => item.link === pathname
  )[0];

  console.log(nodeItemData);
  return (
    <Fragment>
      <PageHeader
        breadcrumb={[
          { text: "Home", isCurrentPage: false, link: "/" },
          { text: "Node", isCurrentPage: false, link: "/node" },
          { text: "Node Designer", isCurrentPage: true },
        ]}
        buttonText={"Validate"}
        icon={Play32}
        headerText={nodeItemData.name}
        theme={"dark"}
      />
      <NodeItemContainer>
        <ComponentEditor />
        <ComponentPane />
      </NodeItemContainer>
    </Fragment>
  );
};

export default NodeItemContent;
