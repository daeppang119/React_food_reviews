import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import imgLogo from "../assets/logo.png";

const StHeader = styled.header`
  position: relative;
  height: 8rem;
`;
const StH1 = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StLogo = styled.img`
  width: 200px;
`;

function Header() {
  return (
    <StHeader>
      <StH1>
        <Link to="/">
          <StLogo src={imgLogo} alt="logo imge" />
        </Link>
      </StH1>
    </StHeader>
  );
}

export default React.memo(Header);
