import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    body{scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }}
    input,
    textarea {
      box-sizing: border-box;
      width: 100%;
      border: 0;
      border-radius: 4px;
      outline: none;
      background-color: rgb(233, 233, 233);
    }
`;
