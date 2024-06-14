import styled from "styled-components";

const HomeStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
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

  .title {
    margin: 0;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0%);
    font-size: 5rem;
    color: white;
  }

  .nav-login {
    position: absolute;
    top: 2rem;
    right: 4rem;

    a {
      /* text-decoration: none; */
      color: white;
    }
  }
`;

export default HomeStyleContainer;
