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
        font-size: 2.5rem;
        color: white;
      }

      .img-container {
        height: 20rem;
        width: 100%;

        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }

      .footer-container {
        width: 100%;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 24rem;
        color: #7b84df;
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
