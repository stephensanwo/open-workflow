import { useState, useEffect } from "react";
import { FlowItemContextProvider } from "./context";
import { PageContainer, MobileWarningDiv } from "../../shared/layout";
import { FlowContextProvider } from "../../context/flow";
import FlowItemContent from "./FlowItemContent";
import { NodeContextProvider } from "../../context/nodes";

const FlowItem: React.FC = () => {
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 800) setShowMobileWarning(true);
  }, []);
  return (
    <FlowContextProvider>
      <FlowItemContextProvider>
        <NodeContextProvider>
          {showMobileWarning ? (
            <MobileWarningDiv>
              <p>
                <strong>OpenFlow</strong> is not supported on this screen size,
                Please open on a desktop browser
              </p>
            </MobileWarningDiv>
          ) : (
            <PageContainer dark>
              <FlowItemContent />
            </PageContainer>
          )}
        </NodeContextProvider>
      </FlowItemContextProvider>
    </FlowContextProvider>
  );
};

export default FlowItem;
