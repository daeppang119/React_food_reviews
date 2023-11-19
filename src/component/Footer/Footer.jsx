import React from "react";
import styled from "styled-components";

const StFooter = styled.footer`
  width: 100%;
  padding: 1rem 0;
  position: fixed;
  background-color: #fff;
  bottom: 0;
`;
const StP = styled.p`
  text-align: center;
  font-size: 12px;
`;

export default function Footer() {
  return (
    <StFooter>
      <StP>Copyright &copy; 2023 YuNaPark All rights reserved.</StP>
    </StFooter>
  );
}
