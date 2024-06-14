import styled from "styled-components";

const PopupDetailStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1rem);
  visibility: hidden;
  opacity: 0;
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

  .popup-container {
    height: 48rem;
    width: 60rem;
    /* padding: 4rem; */
    position: absolute;
    border-radius: 1.5rem;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: white 0.4rem solid;
    -webkit-box-shadow: 6px 6px 36px -20px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 6px 6px 36px -20px rgba(0, 0, 0, 0.75);
    box-shadow: 6px 6px 36px -20px rgba(0, 0, 0, 0.75);

    .header {
      width: 100%;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0rem 1rem;
      background: #cdd7f7;

      button {
        border: none;
        background: #f96359;
        border-radius: 50%;
        width: 1.4rem;
        height: 1.4rem;
        cursor: pointer;
      }
    }

    .contents {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      .img-container {
        height: 20rem;
        width: 100%;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      h1 {
        color: #7b84df;
        height: 4rem;
        line-height: 4rem;
      }
    }
    .content-paragraph {
      border-top: 0.2rem #dddddd solid;
      padding-top: 1rem;
      margin: 0rem 2rem;
      height: 19rem; /* Make sure the parent container has a defined height */
      overflow-y: auto; /* Enable vertical scrolling */

      p {
        margin: 0;
        margin-right: 0.8rem;
        color: #7d7d7d;
        font-size: 1rem;
        line-height: 2rem;
      }
    }
    /* transform: translate(-50%, -50%); */
  }
`;

export default PopupDetailStyleContainer;
