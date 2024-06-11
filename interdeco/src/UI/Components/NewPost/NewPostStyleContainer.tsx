import styled from "styled-components";

const NewPostStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    height: 90%;
    width: 90%;
    background: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem;
    input {
      width: 100%;
      height: 4rem;
    }
    textarea {
      width: 100%;
      resize: none;
      height: 40rem;
    }
  }
`;

export default NewPostStyleContainer;
