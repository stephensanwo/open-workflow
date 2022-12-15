import React, { Fragment } from "react";
import { StateColors } from "../../shared/themes";
import { Delete16, Edit16 } from "@carbon/icons-react";

interface ActionButtonProps {
  onClick: React.Dispatch<React.SetStateAction<any>>;
  actionType: "edit" | "delete";
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={props.onClick}
    >
      {props.actionType === "delete" ? (
        <Delete16 fill={StateColors.failed} />
      ) : props.actionType === "edit" ? (
        <Edit16 fill={StateColors.open} />
      ) : (
        <Fragment></Fragment>
      )}
    </div>
  );
};

export default ActionButton;
