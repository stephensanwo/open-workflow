import React from "react";
import { ToastNotification } from "carbon-components-react";

interface NotificationProps {
  title: string;
  subtitle: string;
  kind: string;
  hideCloseButton: boolean;
  caption: React.ReactNode;
  styles?: object;
  lowContrast?: boolean;
}

const Notification: React.FC<NotificationProps> = ({
  title,
  subtitle,
  caption,
  kind,
  hideCloseButton,
  styles,
  lowContrast,
}) => {
  return (
    <ToastNotification
      kind={kind}
      title={title}
      lowContrast={lowContrast}
      subtitle={subtitle}
      style={{ ...styles, width: "100%" }}
      hideCloseButton={hideCloseButton}
      caption={caption}
    ></ToastNotification>
  );
};

export default Notification;
