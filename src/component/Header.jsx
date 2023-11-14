import React from "react";
import styled from "styled-components";

const StBg = styled.div`
  background-image: url(https://cdn.dribbble.com/userupload/10466957/file/original-60dc882fef68a12c9e58da0a91bef268.jpg?resize=752x);
`;
const StH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
`;

export default function Header() {
  return (
    <StBg>
      <StH1>지역맛집 리스트</StH1>
    </StBg>
  );
}
