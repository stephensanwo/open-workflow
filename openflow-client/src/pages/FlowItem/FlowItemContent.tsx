import React, { Fragment, useContext } from "react";
import FlowTree from "../../components/FlowTree";
import styled from "styled-components";
import FlowActions from "../../components/FlowActions";
import NodeSelector from "../../components/NodeSelector";
import { Play32 } from "@carbon/icons-react";
import { useLocation } from "react-router-dom";
import { FlowContext } from "../../context/flow";
import PageHeader from "../../components/PageHeader";

const FlowItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85vh;
  padding-bottom: 20px;
`;

export const FlowTreeDiv = styled.div`
  background-color: #262626;
  width: 45%;
`;
const NodeSelectorDiv = styled.div`
  width: 17.5%;
`;

const ActionsDiv = styled.div`
  // background-color: #fff;
  /* background-color: #262626; */
  width: 35%;
`;

const FlowItemContent = () => {
  const { pathname } = useLocation();
  const flowData = useContext(FlowContext);
  const flowItemData = flowData.flows.filter(
    (item) => item.link === pathname
  )[0];

  return (
    <Fragment>
      <PageHeader
        breadcrumb={[
          { text: "Home", isCurrentPage: false, link: "/" },
          { text: "Flow", isCurrentPage: false, link: "/flow" },
          { text: "Flow Studio", isCurrentPage: true },
        ]}
        buttonText={"Run All"}
        icon={Play32}
        headerText={flowItemData.name}
      />
      <FlowItemContainer>
        <NodeSelectorDiv>
          <NodeSelector />
        </NodeSelectorDiv>
        <FlowTreeDiv>
          <FlowTree />
        </FlowTreeDiv>
        <ActionsDiv>
          <FlowActions />
        </ActionsDiv>
      </FlowItemContainer>
    </Fragment>
  );
};

export default FlowItemContent;
