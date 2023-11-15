import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import styled from "styled-components";

const StMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <StMain>{children}</StMain>
      <Footer />
    </>
  );
}

export default Layout;
