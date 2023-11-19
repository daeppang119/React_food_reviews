import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    body{scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }}
`;
