import React from "react";
import styled from "styled-components";

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

function Layout({ children }) {
  return (
    <div>
      <StLayout>{children}</StLayout>
    </div>
  );
}

export default Layout;
