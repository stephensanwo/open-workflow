import React, { Fragment, useContext } from "react";
import { Tile } from "carbon-components-react";
import { FlowContext } from "../../context/flow";
import { StateColors } from "../../shared/themes";
import { DotMark16 } from "@carbon/icons-react";

const FlowContentMobile: React.FC = () => {
  const flowData = useContext(FlowContext);
  return (
    <Fragment>
      {flowData.flows.map((row, index) => (
        <Tile
          style={{
            width: "100%",
            height: "150px",
            backgroundColor: "#fff",
            marginTop: "20px",
          }}
          key={index}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h6 style={{ color: StateColors.open, marginBottom: "10px" }}>
                  {row.name}
                </h6>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <DotMark16
                    fill={
                      row.state === "open"
                        ? StateColors.open
                        : row.state === "failed"
                        ? StateColors.failed
                        : row.state === "success"
                        ? StateColors.success
                        : row.state === "warning"
                        ? StateColors.warning
                        : row.state === "running"
                        ? StateColors.running
                        : StateColors.neutral
                    }
                  />{" "}
                  <small>{row.state}</small>
                </span>
              </div>

              <small>{row.description}</small>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "10%",
              }}
            >
              <div>
                <small>Created On: {row.created_on}</small>
              </div>
              <div>
                <small>Created By: {row.created_by}</small>
              </div>
            </div>
          </div>
        </Tile>
      ))}
    </Fragment>
  );
};

export default FlowContentMobile;
