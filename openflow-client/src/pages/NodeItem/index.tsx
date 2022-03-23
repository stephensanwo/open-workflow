import { useState, useEffect } from "react";
import { NodeItemContextProvider } from "./context";
import { PageContainer, MobileWarningDiv } from "../../shared/layout";
import { NodeContextProvider } from "../../context/nodes";
import NodeItemContent from "./NodeItemContent";

const FlowItem: React.FC = () => {
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 800) setShowMobileWarning(true);
  }, []);
  return (
    <NodeContextProvider>
      <NodeItemContextProvider>
        {showMobileWarning ? (
          <MobileWarningDiv>
            <p>
              <strong>Node Designer</strong> is not supported on this screen
              size, Please open on a desktop browser
            </p>
          </MobileWarningDiv>
        ) : (
          <PageContainer dark>
            <NodeItemContent />
          </PageContainer>
        )}
      </NodeItemContextProvider>
    </NodeContextProvider>
  );
};

export default FlowItem;
