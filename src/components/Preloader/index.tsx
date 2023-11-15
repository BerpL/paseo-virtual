
import React from 'react';
import { Container, Icon } from './styles';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function VergePreloader() {

  return (
    <Container id="preloader_screen">
      <div>
      <img style={{
fontSize: '34px',
textTransform: 'uppercase',
left: '41%',
height: '88px',
overflow: 'hidden',
top: '33px',
display: 'block',
filter: 'brightness(0) invert(1)'}} src="assets/imagenes/logo-quellaveco.png"/>
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
