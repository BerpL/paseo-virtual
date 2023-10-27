import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 3px;
  top: 123px;
  display: none;
  width: 25px;
  height: 25px;
  border: 1px solid #fff;

  svg {
    color: #fff;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }

  /* @media only screen and (max-width: 730px) {
    display: flex;
  }
  @media only screen and (max-width: 500px) {
    left: 0;
    top: 70px;
  }
  @media only screen and (max-width: 370px) {
    top: 90px;
  } */
`;
