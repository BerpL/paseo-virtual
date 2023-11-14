
import React from 'react';
import { Container, Icon } from './styles';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function VergePreloader() {

  return (
    <Container id="preloader_screen">
      <div>
      <img style={{color: 'white',
fontSize: '34px',
textTransform: 'uppercase',
left: '41%',
height: '88px',
overflow: 'hidden',
top: '33px',
display: 'block'}} src="assets/imagenes/logo-eduverso-blanco.png"/>
        <Icon>
          <AiOutlineLoading3Quarters />
        </Icon>
        <br />
        <div id="loading_percentage">0%</div>
      </div>


    </Container>
  );
}

export default VergePreloader;
