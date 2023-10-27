import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }
  html, body, #quellaveco {
    width: 100%;
    height: 100vh;
  }

  button {
    font-family: 'Roboto Condensed', sans-serif;
  }
  body{
    margin:0;
    padding:0;
    font-family: 'Tomorrow', sans-serif;
    height:100vh;
  background-image: radial-gradient(
    50.17% 162.56% at 49.83% 51.19%,
    #ffffff 0%,
    #dee9ff 100%
  );
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
  }
  .text{
    position:absolute;
    top:10%;
    color:#7b7878;
    text-align:center;
    width: 100vw;
  }
  h1{
    font-size:50px;
  }
  .star{
    position:absolute;
    width:2px;
    height:2px;
    background:#fff;
    right:0;
    animation:starTwinkle 3s infinite linear;
  }
  .astronaut img{
    width:30vh;
    position:absolute;
    top:55%;
    animation:astronautFly 6s infinite linear;
  }
  @keyframes astronautFly{
    0%{
      left:-100px;
    }
    25%{
      top:50%;
      transform:rotate(30deg);
    }
    50%{
      transform:rotate(45deg);
      top:55%;
    }
    75%{
      top:60%;
      transform:rotate(30deg);
    }
    100%{
      left:110%;
      transform:rotate(45deg);
    }
  }
  @keyframes starTwinkle{
    0%{
       background:rgba(255,255,255,0.4);
    }
    25%{
      background:rgba(255,255,255,0.8);
    }
    50%{
     background:rgba(255,255,255,1);
    }
    75%{
      background:rgba(255,255,255,0.8);
    }
    100%{
      background:rgba(255,255,255,0.4);
    }
  }
`;
