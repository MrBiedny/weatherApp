import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #c7c7eb, #ccf2dd);
  .container {
    align-items: center;
    background-blend-mode: overlay;
    background-color: #ffffff7d;
    border-radius: 0.75rem;
    box-shadow: 0 2rem 4rem rgb(0 0 0 / 20%);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    flex-direction: column;
    justify-content: space-between;
    left: 50%;
    padding: 2rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .searchArea {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.5rem;
    width: 100%;
  }

  .searchArea > input {
    background: transparent;
    border: 1px solid grey;
    border-radius: 1.5rem;
    padding: 0.5rem;
    outline: none;
    text-align: center;
    width: 80%;
  }
  .searchCircle {
    align-items: center;
    border: 1px solid grey;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 2rem;
    justify-content: center;
    width: 2rem;

    > .searchIcon {
      color: grey;
      font-size: 1.5rem;
    }
  }

  .weatherArea {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;

    > .icon {
      font-size: 9rem;
    }

    > h1 {
      font-family: "Bebas Neue", sans-serif;
      font-size: 3rem;
    }

    > span {
      margin-bottom: 1.25rem;
      font-family: "Inter", sans-serif;
    }

    > h2 {
      font-family: "Inter", sans-serif;
      font-size: 2rem;
      font-weight: 400;
    }
  }

  .bottomInfoArea {
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(243, 255, 253, 1) 0%,
      rgba(253, 255, 232, 1) 100%
    );
    border-radius: 0.75rem;
    display: flex;
    font-family: "Josefin Sans", sans-serif;
    justify-content: space-around;
    margin: 10px;
    padding: 1.5rem;
  }
  .humidityLevel,
  .wind {
    align-items: center;
    display: flex;
    margin: 0 1.5rem;
    > .humidIcon {
      font-size: 3rem;
    }
  }

  .windIcon {
    font-size: 2rem;
    margin-right: 1.25rem;
  }

  .loading {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 25rem;
    justify-content: center;
    width: 19rem;
    z-index: 9999;

    .loadingIcon {
      animation: spin 2s linear infinite;
      font-size: 3rem;
    }
    p {
      font-family: "Josefin Sans", sans-serif;
      font-size: 1.5rem;
      margin-top: 0.75rem;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
