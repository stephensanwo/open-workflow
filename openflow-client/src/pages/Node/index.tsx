import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Add32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import {
  PageContainer,
  HeaderAction,
  MobileContainerDiv,
} from "../../shared/layout";
import NewNode from "./NewNode";
import { NodeContextProvider } from "../../context/nodes";
import NodeContent from "./NodeContent";
import PageHeader from "../../components/PageHeader";

const FlowContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Flow: React.FC = () => {
  const [modal, setModal] = useState("");

  const toggleModal = () => {
    if (modal === "") {
      setModal("is-visible");
    } else {
      setModal("");
    }
  };

  return (
    <NodeContextProvider>
      <MobileContainerDiv>
        <PageHeader
          breadcrumb={[
            { text: "Home", isCurrentPage: false, link: "/" },
            { text: "Node", isCurrentPage: true },
          ]}
          headerText={"Node Designer"}
        />
        <NodeContent />
      </MobileContainerDiv>

      <PageContainer dark>
        <PageHeader
          action={() => toggleModal()}
          breadcrumb={[
            { text: "Home", isCurrentPage: false, link: "/" },
            { text: "Node", isCurrentPage: true },
          ]}
          buttonText={"New Node"}
          icon={Add32}
          headerText={"Node Designer"}
          theme={"dark"}
        />

        <FlowContainer>
          <NodeContent />
        </FlowContainer>
        <NewNode modal={modal} toggleModal={toggleModal} />
      </PageContainer>
    </NodeContextProvider>
  );
};
export default Flow;
