import React from "react";
import { Router } from "@reach/router";
import Bookmarks from "./components/Bookmarks";
import styled from "styled-components";

function App() {
  return (
    <PageWrapper>
      <Header>
        <LogoFont>Linky</LogoFont>
      </Header>
      <Router>
        <Bookmarks path="/" />
      </Router>
    </PageWrapper>
  );
}

export default App;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  padding: 20px 50px;
  background-color: violet;
`;

const LogoFont = styled.h1`
  color: white;
`;
