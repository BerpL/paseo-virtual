import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .viewer__title {
    color: white;
    position: absolute;
    font-size: 6vh;
    text-transform: uppercase;
    font-weight: 700;
    left: 5vh;
  /*   max-width: 50%; */
    height: 15vh;
    overflow: hidden;
    top: 3vh;
  }

  .viewer__line {
    top: 12vh;
    left: 5vh;
    width: 40vh;
    position: absolute;
    height: 2px;
    background-color: #fff;
  }

  /* @media only screen and (max-width: 500px) {
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
  } */

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
    background: #3f51b5;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 10px;
    transition: border 0.3s ease;
    transition: color 0.3s ease;
    user-select: none;
    outline: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    padding: 10px 10px 10px 0px;
    transition: all ease 0.5s;

    svg {
      color: #fff;
      width: 40px;
      flex-shrink: 0;
      transition: all 0.3 ease;
    }

    &:hover {
      transform: scale(1.05);
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
    bottom: 5vh;
    right: 27vh;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: auto;
    text-align: center;
    padding: 3vh;
    left: inherit;
  }

  .viewer__area {
    bottom: 5vh;
    right: 5vh;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 20vh;
    text-align: center;
    padding: 3vh;
    left: inherit;
  }

  @media only screen and (max-width: 800px) {
    .viewer__back {
      width: 110px;
    }
    .viewer__home {
      width: 55px;
      font-size: 10px;
      right: 85px;
      height: 31px;
    }
    .viewer__area {
      width: 55px;
      font-size: 10px;
      height: 31px;
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

  .button-iniciar{
    position: absolute;
    right: 5vh;
    bottom: 5vh;
    color: #ffff;
    background: #3f51b5;
    padding: 2vh;
    font-size: 1.75vh;
    /* border: solid 1px #fff; */
    /* width: 4vh; */
    z-index: 3;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    transition: all ease 0.5s;
    letter-spacing: 0.25vh;
    text-transform: uppercase;
    transition: all ease 0.5s;
}
.button-iniciar:hover{
    cursor: pointer;
    transform: scale(1.05);
    background: #3f51b5;

}
`;
