import React, { useEffect, useState } from "react";
import { ToastNotification } from "carbon-components-react";
import styled from "styled-components";
import { AlertContainer } from "../shared/layout";
import { AlertData } from "../types/errors";

interface AlertProps {
  title: string;
  subtitle: string | unknown;
  kind: string;
  hideCloseButton: boolean;
  lowContrast?: boolean;
}

interface AlertDataProps {
  alerts: Array<AlertData>;
}

const Alert: React.FC<AlertProps> = ({
  title,
  subtitle,
  kind,
  hideCloseButton,
  lowContrast,
}) => {
  return (
    <ToastNotification
      kind={kind}
      title={title}
      lowContrast={lowContrast}
      subtitle={subtitle}
      style={{ width: "100%", maxWidth: "100%" }}
      hideCloseButton={hideCloseButton}
      timeout={5000}
    ></ToastNotification>
  );
};

export const ShowAlerts: React.FC<AlertDataProps> = ({ alerts }) => {
  return (
    <AlertContainer>
      {alerts &&
        alerts.map((alert) => (
          <Alert
            title={alert.title}
            subtitle={alert.detail}
            kind="error"
            hideCloseButton={false}
          />
        ))}
    </AlertContainer>
  );
};
