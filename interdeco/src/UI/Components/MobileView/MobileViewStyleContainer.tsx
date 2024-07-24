import styled from "styled-components";

const MobileViewStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fed0be, #fbb2b4);
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
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 1.7rem;
    margin: 0;
    margin: 0rem 1rem;
    text-transform: uppercase;
  }
`;

export default MobileViewStyleContainer;
