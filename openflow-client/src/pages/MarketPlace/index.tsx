import React from "react";
import PageHeader from "../../components/PageHeader";
import { NodeContextProvider } from "../../context/nodes";
import MarketPlaceContent from "./MarketPlaceContent";
import MenuPanel from "../../components/MenuPanel";

import styled from "styled-components";

export const MarketPlaceContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-right: 3.5%;
  padding-left: 350px;
  padding-top: 40px;
  background-color: #f4f4f4;
`;

const MarketPlace: React.FC = () => {
  return (
    <NodeContextProvider>
      <MarketPlaceContainer>
        <MenuPanel expanded={true} />
        <MarketPlaceContent />
      </MarketPlaceContainer>
    </NodeContextProvider>
  );
};

export default MarketPlace;
