import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`

    ${reset}

    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: -1px;
        word-break: break-all;
        transition: background-color 0.3s ease;
        background-color: ${(props) =>
          props.isTodoreClicked ? "#e0e0e0" : "white"}; 
    }
    ul, li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: black;
    }

`;
