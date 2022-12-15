import React from "react";
import styled from "styled-components";
import { SelectableTile } from "carbon-components-react";

const TileFooter = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;
  bottom: 15px;
  p {
    font-weight: bold;
  }
  span {
    margin-right: 30px;
  }
`;

const TileContainer = styled.div`
  width: 250px;
`;

export interface SelectionTile {
  styles?: any;
  onChange?: any;
  icon?: JSX.Element | null;
  label?: string;
  selected?: boolean;
  tag?: JSX.Element | null;
}

export const SelectionTile = (props: SelectionTile) => (
  <TileContainer className={props.styles}>
    <SelectableTile
      light={true}
      onChange={() => {
        props.onChange();
      }}
      selected={props.selected}
    >
      {props.icon}
      <TileFooter>
        <p>{props.label}</p>
        {props.tag}
      </TileFooter>
    </SelectableTile>
  </TileContainer>
);
