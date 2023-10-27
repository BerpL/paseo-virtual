import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 555;
  top: calc(50% - 486px / 2);
  right: 30px;
  .table-container{
    width: 360px;
    overflow:auto;
    user-select: none;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    img{
      max-width: 100%;
      max-height: 100%;
    }
  }

  .table-wrapper{
    align-items: unset;
    justify-content: unset;
  }
  .eq__name{
    color: white;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .btn-parts, .btn-operation, .btn-back {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    background-color: rgba(63,63,63,0.2);
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 10px;
    transition: background-color 0.3s ease;
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
    }
    .btn-operation{
      margin-bottom: 0px;
    }
    .btn-back {
      border: 2px solid #ddd;
      color: #ddd;
    }
  }

  @media only screen and (max-width: 700px) {
    
    right: 0;
    .table-container{
      width: 100%;
    }
  }
  
`;


export const ContainerFull = styled.div`
    width: 100vh;
    margin-top:50px;
    max-width: 800px;
    img{
      width: 100%;
    }

    @media only screen and (max-width: 700px) {
    
      width: 100%;
  }
`


export const Table = styled.div`
    width: 100%;
    .row {
      background: rgba(0,0,0,0.8);
      width: 100%;
      display: flex;
    }
    .label, .value {
      font-size: 12px;
      padding: 5px 10px;
      border: 2px solid #ddd;
      color: white;
      width: 50%;
    }
`
