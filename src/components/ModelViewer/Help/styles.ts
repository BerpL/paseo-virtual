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
    font-size: 1.5em;
    margin-bottom: 12px;
    font-weight: 900;
    color: #fff;
    text-shadow: 1px 1px 1px #000, 0 1px 3px #000;
  }



  .help__control{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
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
    display: flex;
    font-family: Cutive Mono,monospace;
    padding: 2px 5px;
    margin-right: 2px;
    min-width: 10px;
    text-align: center;
    margin-left: 2px;
    background: #eff0f2;
    box-shadow: inset 0 0 25px #e8e8e8, 0 1px 0 #c3c3c3, 0 2px 0 #c9c9c9, 0 2px 3px #000;
    color: #111;
    border-radius: 2px;
    font-size: 14px;
    align-items: center;
    justify-content: center;
  }
  .help__control .help__text{

    color: #fff;
    text-shadow: 1px 1px 1px #000, 0 1px 3px #000;
  }


`;
