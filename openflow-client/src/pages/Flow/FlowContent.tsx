import React, { useContext } from "react";
import StyledTable from "../../components/StyledTable";
import { FlowContext } from "../../context/flow";

const headerData = [
  {
    header: "Name",
    key: "name",
    headerIsLink: true,
  },
  {
    header: "Description",
    key: "description",
  },
  {
    header: "Created By",
    key: "created_by",
  },
  {
    header: "Created On",
    key: "created_on",
  },
  {
    header: "Last Edit",
    key: "last_edit",
  },
  {
    header: "Nodes",
    key: "nodes",
  },
  {
    header: "Edges",
    key: "edges",
  },

  {
    header: "State",
    key: "state",
  },
];
const FlowContent: React.FC = () => {
  const flowData = useContext(FlowContext);
  console.log(flowData);

  return (
    <StyledTable
      isTableHeader={false}
      isPrimaryButton={false}
      rowData={flowData.flows}
      headerData={headerData}
      isActions={true}
      deleteAction={true}
      downloadAction={true}
      editAction={true}
    />
  );
};

export default FlowContent;
