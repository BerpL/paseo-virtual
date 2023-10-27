import styled from 'styled-components';


export const Item = styled.div`
width: 40vh;
height: 7vh;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
background: #031795bd;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
overflow: hidden;
cursor: pointer;
margin-bottom: 1.5vh;
-webkit-transition: border 0.3s ease;
transition: border 0.3s ease;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
transition: all ease 0.5s;
  
 /*  @media only screen and (max-width: 730px) {
    width: 80%;
  }
  @media only screen and (max-width: 330px) {
    width: 100%;
  } */

  &:hover {
    transform: scale(1.09);
    /* border: 1px solid rgb(10, 180, 255); */
    svg{
      transform: rotate(90deg);
      
    }
  /*   p{
     
    } */
  }

  svg {
    color: #fff;
    width: 40px;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }
  p {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 2.1vh;
    margin: 1vh 1vh 1vh 1vh;
    display: block;
    overflow: hidden;
    color: #fff;
    text-transform: uppercase;
    -webkit-transition: color 0.5s ease;
    transition: color 0.5s ease;
  }

  
`;



export const Container = styled.div`
position: absolute;
left: 5vh;
top: 15vh;
bottom: 4vh;
overflow-y: auto;

  ${Item}:last-child{
    margin-bottom: 0;
  }

  /* @media only screen and (max-width: 730px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    left: 5px;
    right: 5px;
  } */

`;


