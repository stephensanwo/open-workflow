import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { PageContainer } from "../../shared/layout";
import { Add32 } from "@carbon/icons-react";
import NewFile from "./NewFile";
import FileContent from "./FileContent";
import styled from "styled-components";
import { FileContextProvider } from "../../context/workspace";

const FileContainer = styled.div``;

const Workspace: React.FC = () => {
  const [modal, setModal] = useState("");

  const toggleModal = () => {
    if (modal === "") {
      setModal("is-visible");
    } else {
      setModal("");
    }
  };
  return (
    <FileContextProvider>
      <PageContainer dark>
        <PageHeader
          action={() => toggleModal()}
          breadcrumb={[
            { text: "Home", isCurrentPage: false, link: "/" },
            { text: "Workspace", isCurrentPage: true },
          ]}
          buttonText={"New File"}
          icon={Add32}
          headerText={"Workspace"}
        />
        <FileContainer>
          <FileContent />
        </FileContainer>
        <NewFile modal={modal} toggleModal={toggleModal} />
      </PageContainer>
    </FileContextProvider>
  );
};

export default Workspace;
