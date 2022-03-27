import React, { useContext } from "react";
import StyledTable from "../../components/StyledTable";
import { FileContext } from "../../context/workspace";

const headerData = [
  {
    header: "Name",
    key: "name",
    headerIsLink: false,
  },
  {
    header: "File Type",
    key: "file_type",
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
];
const FileContent: React.FC = () => {
  const fileData = useContext(FileContext);
  console.log(fileData);

  return (
    <StyledTable
      isTableHeader={false}
      isPrimaryButton={false}
      rowData={fileData.files}
      headerData={headerData}
      isActions={true}
      deleteAction={true}
      downloadAction={true}
      editAction={true}
    />
  );
};

export default FileContent;
