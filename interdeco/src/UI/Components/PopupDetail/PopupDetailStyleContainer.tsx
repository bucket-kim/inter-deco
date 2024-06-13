import styled from "styled-components";

const PopupDetailStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  .popup-container {
    height: 30rem;
    width: 30rem;
    position: absolute;
    top: 50%;
    left: 50%;
    background: red;
    /* transform: translate(-50%, -50%); */
  }
`;

export default PopupDetailStyleContainer;
