import React, { useContext } from "react";
import { NodeContext } from "../../context/nodes";
import StyledTable from "../../components/StyledTable";

const NodeContent: any = () => {
  const nodeData = useContext(NodeContext);
  console.log(nodeData);

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
      header: "Category",
      key: "category",
    },

    {
      header: "State",
      key: "state",
    },
  ];

  return (
    <StyledTable
      isTableHeader={false}
      isPrimaryButton={false}
      rowData={nodeData.nodes}
      headerData={headerData}
      isActions={true}
      deleteAction={true}
      downloadAction={true}
      editAction={true}
    />
  );
};

export default NodeContent;
