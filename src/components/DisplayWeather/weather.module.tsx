import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #c7c7eb, #ccf2dd);
  .container {
    background-color: #ffffff7d;
    border-radius: 0.75rem;
    padding: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2rem 4rem rgb(0 0 0 / 20%);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    background-blend-mode: overlay;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: absolute;
  }

  .searchArea {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: none;
    border: 1px solid grey;
    padding: 0.5rem;
    border-radius: 1.5rem;
    text-align: center;
    width: 80%;
    background: transparent;
  }
  .searchCircle {
    border: 1px solid grey;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > .searchIcon {
      font-size: 1.5rem;
      color: grey;
    }
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;

    > .icon {
      font-size: 9rem;
    }

    > h1 {
      font-size: 3rem;

      font-family: "Bebas Neue", sans-serif;
    }

    > span {
      margin-bottom: 1.25rem;
      font-family: "Inter", sans-serif;
    }

    > h2 {
      font-size: 2rem;
      font-family: "Inter", sans-serif;
      font-weight: 400;
    }
  }

  .bottomInfoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif;
    margin: 10px;
    background: linear-gradient(
      90deg,
      rgba(243, 255, 253, 1) 0%,
      rgba(253, 255, 232, 1) 100%
    );
    border-radius: 0.75rem;
    padding: 1.5rem;
  }
  .humidityLevel,
  .wind {
    display: flex;
    align-items: center;
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
    height: 25rem;
    width: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .loadingIcon {
      font-size: 3rem;

      animation: spin 2s linear infinite;
    }
    p {
      font-size: 1.5rem;
      margin-top: 0.75rem;
      font-family: "Josefin Sans", sans-serif;
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