import React, { useEffect, useState }from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  const [isInIframe, setIsInIframe] = useState(false);
  useEffect(() => {
    // Comprueba si la aplicación está siendo cargada en un iframe
    const inIframe = (): boolean => {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    };

    setIsInIframe(inIframe());
  }, []); 

 /* const  rutaServidor="/paseoquellaveco";  // Produccion  */
    const  rutaServidor="/"; // Develop  
  return (
    <> 
    <>
    <Router>
     <Routes>
     {/*  */}
       <Route path={rutaServidor} element={<Home />}/>
      
       </Routes>
       <GlobalStyles />
      </Router>
  </>
    {/* {isInIframe ? (
     <Router>
     <Switch>
     
       <Route exact path={rutaServidor} component={Home} />
      
       </Switch>
       <GlobalStyles />
      </Router>
    ) : (
      <>
      <div className="text">
        <img src="assets/imagenes/logo-eduverso.png" style={{height:"20vh"}}/>
      <div>ERROR</div>
      <h1>404</h1>
     
      <div>ACCESO DENEGADO</div>
    </div>
    
    <div className="astronaut">
      <img src="https://static.vecteezy.com/system/resources/previews/008/507/069/original/3d-astronaut-flies-in-open-space-rigged-character-you-can-make-any-pose-cartoon-spaceman-png.png" alt="" className="src"/>
    </div>
    <GlobalStyles />
    </>
    
    )}  */}
  </>
  
   
  );
}

export default App;
