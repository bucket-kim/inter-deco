import styled from "styled-components";

const HomeStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  .title {
    margin: 0;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0%);
    font-size: 4rem;
  }

  .nav-login {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default HomeStyleContainer;
