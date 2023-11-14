import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .viewer__title {
    color: white;
    position: absolute;
    font-size: 34px;
    text-transform: uppercase;
    font-weight: 700;
    left: 30px;
    max-width: 50%;
    height: 88px;
    overflow: hidden;
    top: 33px;
  }

  .viewer__line {
    top: 118px;
    left: 30px;
    width: 265px;
    position: absolute;
    height: 2px;
    background-color: #fff;
  }

  @media only screen and (max-width: 500px) {
    .viewer__title {
      max-width: 100%;
      left: 0;
      font-size: 20px;
      top: 10px;
    }
    .viewer__line {
      width: 100%;
      left: 0;
      top: 60px;
    }
  }

  @media only screen and (max-width: 370px) {
    .viewer__line {
      top: 80px;
    }
  }

  .viewer__iframe__content {
    width: 100%;
    height: 100%;
    background-color: lightgray;
  }

  .viewer__back,
  .viewer__home,
  .viewer__area {
    width: 256px;
    position: absolute;
    bottom: 30px;
    left: 30px;
    height: 51px;
    display: flex;
    background-color: rgba(63, 63, 63, 0.2);
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 10px;
    transition: border 0.3s ease;
    transition: color 0.3s ease;
    user-select: none;
    border: 2px solid #fff;
    outline: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    padding: 10px 10px 10px 0px;

    svg {
      color: #fff;
      width: 40px;
      flex-shrink: 0;
      transition: all 0.3 ease;
    }

    &:hover {
      border: 2px solid rgb(10, 180, 255);
      color: rgb(10, 180, 255);
      svg {
        color: rgb(10, 180, 255);
      }
    }
  }

  .close {
    color: white;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    svg {
      cursor: pointer;
      font-size: 18px;
    }
  }

  .viewer__home {
    bottom: 30px;
    right: 195px;
    justify-content: center;
    width: 155px;
    text-align: center;
    padding: 10px 10px 10px 10px;
    left: inherit;
  }

  .viewer__area {
    bottom: 30px;
    right: 30px;
    justify-content: center;
    width: 155px;
    text-align: center;
    padding: 10px 10px 10px 10px;
    left: inherit;
  }

  @media only screen and (max-width: 800px) {
    .viewer__back {
      width: 110px;
    }
    .viewer__home {
      width: 55px;
      right: 90px;
    }
    .viewer__area {
      width: 55px;
      font-size: 10px;
    }
  }

  .viewer__media {
    position: absolute;
    width: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: gray;
  }
`;
