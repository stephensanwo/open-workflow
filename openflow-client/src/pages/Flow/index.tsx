import React, { useState } from "react";
import styled from "styled-components";
import { Add32 } from "@carbon/icons-react";
import { PageContainer, MobileContainerDiv } from "../../shared/layout";
import NewFlow from "./NewFlow";
import { FlowContextProvider } from "../../context/flow";
import FlowContent from "./FlowContent";
import FlowContentMobile from "./FlowContentMobile";
import PageHeader from "../../components/PageHeader";

const FlowContainer = styled.div``;

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
    <FlowContextProvider>
      <MobileContainerDiv>
        <PageHeader
          breadcrumb={[
            { text: "Home", isCurrentPage: false, link: "/" },
            { text: "Flow", isCurrentPage: true },
          ]}
          headerText={"Flow Studio"}
        />
        <FlowContentMobile />
      </MobileContainerDiv>

      <PageContainer dark>
        <PageHeader
          action={() => toggleModal()}
          breadcrumb={[
            { text: "Home", isCurrentPage: false, link: "/" },
            { text: "Flow", isCurrentPage: true },
          ]}
          buttonText={"New Flow"}
          icon={Add32}
          headerText={"Flow Studio"}
        />

        <FlowContainer>
          <FlowContent />
        </FlowContainer>
        <NewFlow modal={modal} toggleModal={toggleModal} />
      </PageContainer>
    </FlowContextProvider>
  );
};
export default Flow;
