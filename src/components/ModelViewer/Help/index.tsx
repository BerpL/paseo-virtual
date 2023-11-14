import React from 'react';
// import { ImArrowRight, ImArrowLeft, ImArrowUp, ImArrowDown } from 'react-icons/im'
import { MdMouse }  from 'react-icons/md'
import { CgScrollV } from 'react-icons/cg';
import { Container } from './styles';

export const Help: React.FC = () => {
  return (
      <Container>
          <div className="help__title">
              Controles: 
          </div>
          {/* <div className="help__control">
              <div className="help__buttons">  
                <div className="help__button"><ImArrowUp/></div>
                <div className="help__button"><ImArrowDown/></div>
                <div className="help__button"><ImArrowLeft/></div>
                <div className="help__button"><ImArrowRight/></div>
              </div>
              <div className="help__text">
                Movimiento
              </div>
          </div> */}
          <div className="help__control">
              <div className="help__buttons">  
                <div className="help__button"><MdMouse/></div>
              </div>
              <div className="help__text">
                Rotación
              </div>
          </div>
          <div className="help__control">
              <div className="help__buttons">  
                <div className="help__button"><CgScrollV/></div>
              </div>
              <div className="help__text">
                Zoom
              </div>
          </div>
          
      </Container>
  );
}
