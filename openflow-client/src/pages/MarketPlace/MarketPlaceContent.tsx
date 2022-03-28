import React, { Fragment, useContext } from "react";
import { Tile, Search } from "carbon-components-react";
import { NodeContext } from "../../context/nodes";
import { StateColors } from "../../shared/themes";
import { DotMark16 } from "@carbon/icons-react";

const MarketPlaceContent: React.FC = () => {
  const nodeData = useContext(NodeContext);

  return (
    <Fragment>
      <h1 style={{ color: "#000", marginBottom: "40px" }}>
        OpenFlow MarketPlace
      </h1>
      <div style={{ marginBottom: "40px" }}>
        <Search id="search-1" placeHolderText="Search" light={true} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {nodeData.nodes.map((row: any, index) => (
          <Tile
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "#333333",
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
                  <h6
                    style={{ color: StateColors.neutral, marginBottom: "10px" }}
                  >
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
      </div>
    </Fragment>
  );
};

export default MarketPlaceContent;
