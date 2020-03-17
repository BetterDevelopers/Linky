import React from "react";
import "./Spinner.css";
import styled from 'styled-components'

export default function Spinner() {
  return (
    <Wrap>
      <div className="lds-dual-ring" />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`
