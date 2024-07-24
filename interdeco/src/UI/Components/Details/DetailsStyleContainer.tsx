import styled from "styled-components";

const DetailsStyleContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  max-width: 52rem;
  transform: translate(-50%, -50%);
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

  .swiper {
    height: 36rem;
    max-width: 52rem;

    .container {
      display: inline-block;
      background: rgba(255, 255, 255, 0.1);
      border: 0.2rem white solid;
      border-radius: 1rem;
      backdrop-filter: blur(1rem);
      height: 36rem;
      cursor: pointer;

      padding: 1rem;

      .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        /* width: 100%; */

        h2 {
          width: 100%;
          text-align: center;
          margin: 0;
          padding: 0.5rem 3rem;
          border-radius: 24rem;
          font-size: 2.5rem;
          color: #4c62dc;
          /* color: white; */
          font-weight: 500;
          background: rgba(255, 255, 255, 0.4);
          -webkit-box-shadow: 2px 2px 16px -10px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 2px 2px 16px -10px rgba(0, 0, 0, 0.75);
          box-shadow: 2px 2px 16px -10px rgba(0, 0, 0, 0.75);
        }

        .img-container {
          height: 24rem;
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
          color: #4c62dc;

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
  }

  @media only screen and (max-width: 844px) {
    width: 21rem;
    .swiper {
      height: 14.5rem;

      .container {
        height: 14.5rem;

        .content-container {
          h2 {
            font-size: 1.25rem;
          }
          .img-container {
            height: 22rem;
          }
          .footer-container {
            p,
            small {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 440px) {
    width: 23rem;
    .swiper {
      height: 32rem;

      .container {
        height: 32rem;

        .content-container {
          h2 {
            font-size: 1.25rem;
          }
          .img-container {
            height: 22rem;
          }
          .footer-container {
            p,
            small {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`;

export default DetailsStyleContainer;
