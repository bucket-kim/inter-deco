import styled from "styled-components";

const LoadingStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(#fed0be, #fbb2b4);
  z-index: 3;
  opacity: 1;
  visibility: visible;
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: white;

  .loading-container {
    .dot-container {
      display: flex;
      .dots {
        background: #ffffff;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        font-size: 4rem;
        /* margin: auto; */
        margin: 0rem 1rem;
        box-shadow:
          2px 2px 4px rgba(0, 0, 0, 0.1),
          -2px -2px 4px rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

export default LoadingStyleContainer;
