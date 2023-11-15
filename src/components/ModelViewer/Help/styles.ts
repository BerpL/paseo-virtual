import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 24px;
  left: calc(50% - 100px);
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 730px) {
    display:none;
  }

  .help__title{
    font-size: 3vh;
    margin-bottom: 1.5vh;
    font-weight: 900;
    color: #fff;
    text-shadow: 1px 1px 1px #000,0 1px 3px #000;
  }



  .help__control{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.5vh;
  }

  .help__control .help__buttons{
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 5px;
    justify-content: center;
  }

  .help__control .help__buttons .help__button{
    text-shadow: none;
    font-weight: 700;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-family: Cutive Mono,monospace;
    padding: 1vh 1vh;
    margin-right: 2vh;
    min-width: 5vh;
    text-align: center;
    margin-left: 2vh;
    background: #eff0f2;
    box-shadow: inset 0 0 25px #e8e8e8,0 1px 0 #c3c3c3,0 2px 0 #c9c9c9,0 2px 3px #000;
    color: #111;
    border-radius: 2px;
    font-size: 2vh;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .help__control .help__text{

    color: #fff;
    text-shadow: 1px 1px 1px #000, 0 1px 3px #000;
  }


`;
