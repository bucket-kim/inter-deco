import styled from "styled-components";

const LoadingStyleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  opacity: 1;
  visibility: visible;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;

  p {
    margin: 0;
    font-size: 1.5rem;
    span {
      margin: 0rem 0.15rem;
    }
  }
`;

export default LoadingStyleContainer;
