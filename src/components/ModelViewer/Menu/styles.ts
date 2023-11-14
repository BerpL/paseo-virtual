import styled from 'styled-components';


export const Item = styled.div`
  width: 256px;
  height: 51px;
  display: flex;
  background-color: rgba(63,63,63,0.72);
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
  /* border: 0px none rgb(10, 180, 255); */
  transition: border 0.3s ease;
  user-select: none;
  
  @media only screen and (max-width: 730px) {
    width: 80%;
  }
  @media only screen and (max-width: 330px) {
    width: 100%;
  }

  &:hover {
    /* border: 1px solid rgb(10, 180, 255); */
    svg{
      transform: rotate(90deg);
      color: rgb(10, 180, 255); 
    }
    p{
      color: rgb(10, 180, 255); 
    }
  }

  svg {
    color: #fff;
    width: 40px;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }
  p {
    display: flex;
    justify-content: center;
    font-size: 14px;
    margin: 10px 10px 10px 0px;
    display: block;
    overflow: hidden;
    color: #fff;
    text-transform: uppercase;
    transition: color 0.5s ease;
  }

  
`;



export const Container = styled.div`
  position: absolute;
  left: 30px;
  top: 135px;
  bottom: 101px;
  overflow-y: auto;
  /* bottom: 30px; */

  ${Item}:last-child{
    margin-bottom: 0;
  }

  @media only screen and (max-width: 730px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    left: 5px;
    right: 5px;
  }

`;


