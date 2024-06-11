import styled from "styled-components";

const DetailsStyleContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 2;
  width: 100%;
  transform: translateY(-50%);
  overflow-x: scroll;
  white-space: nowrap;

  .container {
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    border: 0.2rem white solid;
    border-radius: 1rem;
    backdrop-filter: blur(1rem);
    height: 30rem;
    width: 40rem;
    padding: 1rem;
    margin: 1rem;
  }
`;

export default DetailsStyleContainer;
