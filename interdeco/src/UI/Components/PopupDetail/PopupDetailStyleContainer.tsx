import styled from "styled-components";

const PopupDetailStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
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
    border-radius: 2.4rem;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f5f5f5;
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
      background: #392a5b;

      button {
        border: none;
        background: #f96359;
        border-radius: 50%;
        transform: translateX(1rem);
        width: 1.4rem;
        height: 1.4rem;
        cursor: pointer;
        -webkit-box-shadow: 1px 1px 10px -2px rgba(255, 255, 255, 1);
        -moz-box-shadow: 1px 1px 10px -2px rgba(255, 255, 255, 1);
        box-shadow: 1px 1px 10px -2px rgba(255, 255, 255, 1);
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
        color: #4c62dc;
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

  @media only screen and (max-width: 844px) {
    .popup-container {
      width: 100%;
      height: 100%;
      .contents {
        flex-direction: row;
        .img-container {
          width: 50%;
        }

        .content-paragraph {
          margin: 0;
          width: 50%;
          height: 20rem;
        }
      }
    }
  }
  @media only screen and (max-width: 440px) {
    .popup-container {
      width: 100%;
      height: 100%;
      .contents {
        flex-direction: column;
        .img-container {
          width: 100%;
        }
        .content-paragraph {
          width: 100%;
          margin: 0;
          height: 27rem;
        }
      }
    }
  }
`;

export default PopupDetailStyleContainer;
