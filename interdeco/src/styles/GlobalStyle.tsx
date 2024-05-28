import { isDesktop } from "react-device-detect";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  height: -webkit-fill-available;

  * {
        -webkit-tap-highlight-color: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    h1 {
      margin: 0;
      padding: 0;
    }

    body {
      touch-action: none;
        width: 100vw;
        height: 100vh;
        margin: 0;
        background-color: ${isDesktop ? "white" : "black"};
        overflow: hidden;
    }
`;

export { GlobalStyle };
