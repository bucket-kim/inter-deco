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

  .container {
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    border: 0.2rem white solid;
    border-radius: 1rem;
    backdrop-filter: blur(1rem);
    height: 32rem;
    width: 40rem;
    padding: 1rem;
    margin: 1rem;
    position: relative;
    white-space: wrap;

    .content-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      width: 100%;

      h2 {
        margin: 0;
        padding: 0.5rem 3rem;
        border-radius: 24rem;
        font-size: 2.5rem;
        /* color: #7b84df; */
        color: white;
        font-weight: 500;
        background: rgba(255, 255, 255, 0.4);
      }

      .img-container {
        height: 20rem;
        width: 100%;
        border-radius: 1rem;
        overflow: hidden;

        -webkit-box-shadow: 2px 2px 16px -10px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 2px 2px 16px -10px rgba(0, 0, 0, 0.75);
        box-shadow: 2px 2px 16px -10px rgba(0, 0, 0, 0.75);

        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }

      .footer-container {
        width: 100%;
        padding: 1rem 2rem;
        border-radius: 24rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.4);
        color: #7b84df;

        -webkit-box-shadow: 2px 2px 16px -10px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 2px 2px 16px -10px rgba(0, 0, 0, 0.75);
        box-shadow: 2px 2px 16px -10px rgba(0, 0, 0, 0.75);

        p,
        small {
          font-size: 1rem;
          margin: 0;
          font-weight: 500;
        }
      }
    }
  }
`;

export default DetailsStyleContainer;
