import React, { Fragment, useContext } from "react";
import { Close32 } from "@carbon/icons-react";
import { ControlModalProps } from "./TreeControls";
import StyledTable from "../StyledTable";
import { FlowItemContext } from "../../pages/FlowItem/context";

interface ModalProps {
  modal: string;
  toggleModal: React.Dispatch<React.SetStateAction<any>>;
  selectedModal: ControlModalProps;
}

const Settings: React.FC<ModalProps> = (props) => {
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    props.toggleModal(e);
  };
  const { elements, setElements } = useContext(FlowItemContext);

  let nodeHeaderData = [
    {
      header: "",
      key: "",
    },
  ];

  let nodeRowData = [
    {
      id: "",
      label: "",
      description: "",
      state: "",
    },
  ];

  let edgeRowData = [
    {
      sourceID: "",
      sourceLabel: "",
      sourceDescription: "",
      sourcesState: "",
      targetID: "",
      targetLabel: "",
      targetDescription: "",
      targetsState: "",
    },
  ];
  let edgeHeaderData = [
    {
      header: "",
      key: "",
    },
  ];

  console.log(elements);

  if (elements.length > 0) {
    nodeHeaderData = Object.keys(
      elements.filter((item) => item.category === "node")[0].data
    ).map((item, key) => {
      return {
        header: item[0].toUpperCase() + item.substr(1),
        key: item,
      };
    });

    nodeRowData = elements
      .filter((item) => item.category === "node")
      .map((item, key) => {
        return {
          id: item.id,
          label: item.data.label,
          description: item.data.description,
          state: item.data.state,
        };
      });

    edgeRowData = elements
      .filter((item) => item.category !== "node")
      .map((edgeItem, key) => {
        const source = elements.filter(
          (filterItem) => filterItem.id === edgeItem?.source
        )[0];
        const target = elements.filter(
          (filterItem) => filterItem.id === edgeItem?.target
        )[0];
        console.log(source);
        console.log(target);
        return {
          sourceID: source.id,
          sourceLabel: source.data.label,
          sourceDescription: source.data.description,
          sourcesState: source.data.state,
          targetID: target.id,
          targetLabel: target.data.label,
          targetDescription: target.data.description,
          targetsState: target.data.state,
        };
      });

    if (edgeRowData.length > 0) {
      edgeHeaderData = Object.keys(edgeRowData[0]).map((item, key) => {
        return {
          header: item[0].toUpperCase() + item.substr(1),
          key: item,
        };
      });
    }
  }

  return (
    <div
      data-modal
      id="disabled-modal"
      className={`bx--modal ${props.modal}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disabled-label"
      aria-describedby="disabled-heading"
      tabIndex={-1}
    >
      <div className="bx--modal-container bx--modal-container-fullscreen ">
        <div className="bx--modal-header">
          <p
            className="bx--modal-header__label bx--type-delta"
            id="modal-lokx1olb9q-label"
          >
            Settings
          </p>
          <p
            className="bx--modal-header__heading bx--type-beta"
            id="modal-lokx1olb9q-heading"
          >
            <h2>{props.selectedModal?.label}</h2>
          </p>
          <button
            className="bx--modal-close"
            type="button"
            data-modal-close
            aria-label="close modal"
            onClick={(e) => props.toggleModal(e)}
          >
            <Close32 className="bx--modal-close__icon" />
          </button>
        </div>

        <div className="bx--modal-content">
          {props.selectedModal?.key === "2" ? (
            <StyledTable
              isTableHeader={false}
              isPrimaryButton={false}
              rowData={nodeRowData}
              headerData={nodeHeaderData}
              isActions={true}
              deleteAction={true}
            />
          ) : props.selectedModal?.key === "3" ? (
            <StyledTable
              isTableHeader={false}
              isPrimaryButton={false}
              rowData={edgeRowData}
              headerData={edgeHeaderData}
              isActions={true}
              deleteAction={true}
            />
          ) : (
            <Fragment></Fragment>
          )}
        </div>
        <div className="bx--modal-footer">
          <button
            className="bx--btn bx--btn--secondary"
            type="button"
            data-modal-close
            onClick={(e) => handleClose(e)}
          >
            Cancel
          </button>
          <button
            className="bx--btn bx--btn--primary"
            type="button"
            data-modal-primary-focus
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
