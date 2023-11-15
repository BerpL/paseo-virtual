import React, { useState, useCallback, useMemo, useEffect, memo } from "react";
import { MdArrowBack } from "react-icons/md";

import Menu, { ItemProps } from "./Menu";
import { areas, subareas, subSubAreas } from "./areas";

import { Container } from "./styles";
import ContextualMenu from "./ContextualMenu";
import { Iframe } from "./Iframe";
import { Help } from "./Help";
import Hamburger from "./Hamburguer";

const initialTitle = "";
const plantaUrl = "applications/0000General/0000General.html";

const ModelViewer: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(initialTitle);
  const [titleArea, setTitleArea] = useState("");
  const [currentItems] = useState<ItemProps[]>(areas);
  const [subAreasCurrentItems] = useState(subareas);
  const [subSubAreasItems] = useState(subSubAreas);
  const [vergeUrl, setVergeUrl] = useState(plantaUrl);
  const [idEquipo, setIdEquipo] = useState("");
  const [idArea, setIdArea] = useState("");
  const [idAreaTemp, setIdAreaTemp] = useState("");
  const [showContextualMenu, setShowContextualMenu] = useState(false);
  const [displayAreas, setDisplayAreas] = useState({});
  const [displaySubAreas, setDisplaySubAreas] = useState({ display: "none" });
  const [displaySubSubAreas, setDisplaySubSubAreas] = useState({
    display: "none",
  });
  const [temp, setTemp] = useState(1);
  const [canRenderHamburger, setCanRenderHamburger] = useState(true);

  const handleClickArea = useCallback(
    (key:any) => {
      const item = currentItems.find((x) => x.key === key);
      if (!item) return;
      setIdArea(item.id);
      setIdAreaTemp(item.id);
      setTitleArea(item.title);
      setCurrentTitle(item.title);
      setDisplayAreas({ display: "none" });
      setDisplaySubAreas({ display: "" });
      setCanRenderHamburger(true);
      if (item.vergeUrl) {
        console.log(item.vergeUrl)
        setVergeUrl(item.vergeUrl);
      }
      setTemp(2);
    },
    [currentItems]
  );

  const handleClickSubAreas = useCallback(
    (key:any) => {
      const item = subAreasCurrentItems.find((x) => x.key === key);
      if (!item) return;
      setCurrentTitle(item.title);
      setDisplaySubAreas({ display: "none" });
      setTemp(3);
      setCanRenderHamburger(true);
      if (item.locationId[0] === "/") {
        setVergeUrl(item.locationId);
        setDisplaySubSubAreas({ display: "" });
        setIdArea(item.id);
      }
    },
    [subAreasCurrentItems]
  );

  const handleClickSubSubAreas = useCallback(
    (key:any) => {
      const item = subSubAreasItems.find((x) => x.key === key);
      if (!item) return;
      setCanRenderHamburger(true);
      setCurrentTitle(item.title);
      setDisplaySubSubAreas({ display: "none" });
      setTemp(4);
    },
    [subSubAreasItems]
  );

  const goBack = useCallback(() => {
    setShowContextualMenu(false);
    setCanRenderHamburger(true);
    if (temp === 4) {
      // setVergeUrl(plantaUrl);
      setDisplaySubSubAreas({ display: "" });
      setTemp(3);
    }
    if (temp === 3) {
      setCurrentTitle(titleArea);
      setDisplaySubAreas({ display: "" });
      setDisplaySubSubAreas({ display: "none" });
      setIdArea(idAreaTemp);
      setTemp(2);
    }
    if (temp === 2) {
      setVergeUrl(plantaUrl);
      setCurrentTitle(initialTitle);
      setDisplayAreas({});
      setDisplaySubAreas({ display: "none" });
      setTemp(1);
    }
  }, [temp, titleArea, idAreaTemp]);

  const goHome = useCallback(() => {
    setCanRenderHamburger(true);
    setCurrentTitle(initialTitle);
    setDisplayAreas({});
    setDisplaySubAreas({ display: "none" });
    setTemp(1);
    setShowContextualMenu(false);
    setVergeUrl(plantaUrl);
  }, []);

  const goArea = useCallback(() => {
    setTimeout(() => {
      setDisplaySubAreas({ display: "" });
    }, 2500); // 2000 milisegundos = 2 segundos
    setCanRenderHamburger(true);  
    setCurrentTitle(titleArea);
    /* setDisplaySubAreas({ display: "" }); */
    setShowContextualMenu(false);
    setTemp(2);
  }, [titleArea]);

  const handleClickHamburger = useCallback(() => {
    if (canRenderHamburger) {
      if (temp === 1) {
        setDisplayAreas({ display: "block" });
        setDisplaySubAreas({ display: "none" });
      } else if (temp === 2) {
        setDisplaySubAreas({ display: "block" });
        setDisplaySubSubAreas({ display: "none" });
      } else if (temp === 3) {
        setDisplaySubSubAreas({ display: "block" });
      }
      setCanRenderHamburger(false);
    }else{
      setDisplaySubAreas({ display: "none" });
      setDisplayAreas({ display: "none" });
      setDisplaySubSubAreas({ display: "none" });
      setCanRenderHamburger(true);
    }
  }, [temp, canRenderHamburger]);

  const canRender = useMemo(() => {
    if (temp === 1) return false;
    return true;
  }, [temp]);

  const handleChangeScene = useCallback((e:any) => {
    // console.log(e)
    setIdEquipo(e.target.value);
    setShowContextualMenu(true);
  }, []);

  const handleChangeBloque = useCallback((e:any) => {
    var item = subareas.find((x) => x.locationId === e.target.value);
    setShowContextualMenu(false);
    setIdEquipo("");
    if (!item) {
      item = subSubAreas.find((x) => x.locationId === e.target.value);
      if (!item) return;
      setDisplaySubSubAreas({ display: "none" });
      setTemp(4);
    }
    setCurrentTitle(item.title);
    setDisplaySubAreas({ display: "none" });
    setTemp(3);
  }, []);

  useEffect(() => {
    const input = document.querySelector("#estado_animacion");
    input?.addEventListener("input", handleChangeScene);
    return () => input?.removeEventListener("input", handleChangeScene);
  }, [handleChangeScene]);

  useEffect(() => {
    const input = document.querySelector("#estado_equipo");
    input?.addEventListener("input", handleChangeBloque);
    return () => input?.removeEventListener("input", handleChangeBloque);
    enableFullscreen();
  }, [handleChangeBloque]);

  useEffect(()=>{
    // Agregar el botón al documento
/* document.body.appendChild(fullscreenButton); */
    fullscreenButton.addEventListener('click', () => {
      if (cumpleValidacion) {
          enableFullscreen();
      }
    });
  })

  
  // Verificar si el contenido del párrafo tiene más de 2 caracteres
  const tieneMenosOigualA2Caracteres = initialTitle.length <= 2;

  

  // Validación: Cambia esto a la lógica de tu validación
const cumpleValidacion = true;

// Función para habilitar el modo pantalla completa
function enableFullscreen() {
    const element = document.documentElement as HTMLHtmlElement; // Obtén el elemento raíz (HTML)

    if (element.requestFullscreen) {
        element.requestFullscreen(); // Para la mayoría de los navegadores
    } 
}

// Crear y configurar el botón
const fullscreenButton = document.createElement('button');
fullscreenButton.textContent = 'Modo Pantalla Completa';
fullscreenButton.style.padding = '10px 20px';
fullscreenButton.style.fontSize = '16px';
fullscreenButton.style.backgroundColor = '#007bff';
fullscreenButton.style.color = '#fff';
fullscreenButton.style.border = 'none';
fullscreenButton.style.cursor = 'pointer';
fullscreenButton.style.display = cumpleValidacion ? 'block' : 'none';



// validar orientacion en horizontal
useEffect(() => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    
    window
      .matchMedia("(orientation:portrait)")
      .addEventListener("change", (e: MediaQueryListEvent) => {
        const portrait: boolean = e.matches;
        if (portrait) {
          const horizontalContainer = document.getElementById("horizontalContainer");
          if (horizontalContainer) {
            horizontalContainer.style.display = "flex";
          }
        } else {
          const horizontalContainer = document.getElementById("horizontalContainer");
          if (horizontalContainer) {
            horizontalContainer.style.display = "none";
          }
        }
      });
  } else {
    const horizontalContainer = document.getElementById("horizontalContainer");
    if (horizontalContainer) {
      horizontalContainer.style.display = "none";
    }
  }
  

}, []);


  
  return (
    
    <Container>
      <p className="viewer__title">{currentTitle}</p>
     {/*  {tieneMenosOigualA2Caracteres &&  <img className="viewer__title" src="/assets/imagenes/logo-eduverso-blanco.png"/>} */}
    
      <img  style={{filter: 'brightness(0) invert(1)',
      display: 'none',
      top: '1vh',
      height: '13vh'}} 
className="viewer__title" src="assets/imagenes/logo-quellaveco.png" id="logo-img"/>
      <div className="viewer__line" />
      <Hamburger
        onClickItem={handleClickHamburger}
        canRender={canRenderHamburger}
      />
      <Menu
        items={currentItems}
        onClickItem={handleClickArea}
        style={displayAreas}
      />
      <Menu
        items={subAreasCurrentItems}
        onClickItem={handleClickSubAreas}
        style={displaySubAreas}
        idArea={idArea}
      />
      <Menu
        items={subSubAreasItems}
        onClickItem={handleClickSubSubAreas}
        style={displaySubSubAreas}
        idArea={idArea}
      />
      <input
        id="estado_animacion"
        defaultValue="0"
        style={{ display: "none" }}
      />
      <input id="estado_equipo" defaultValue="0" style={{ display: "none" }} />
      <Iframe url={vergeUrl} title={currentTitle} />
      <Help />
      {canRender && (
        <button  style={{display:'none'}} className="viewer__back" id="go-back" onClick={goBack}>
          <MdArrowBack />
          Atras
        </button>
      )}
      {canRender && (
        <button className="viewer__home" id="go-home" onClick={goHome}>
          Inicio
        </button>
      )}
      {canRender && (
        <button className="viewer__area" id="go-area" onClick={goArea}>
          Retornar
        </button>
      )}
      <ContextualMenu
        key={idEquipo}
        show={showContextualMenu}
        onClose={() => setShowContextualMenu(false)}
        id={idEquipo}
      />
      <div className="button-iniciar" id="btn_empezar_recorrido_0">
        Iniciar recorrido
      </div>
      <div className="button-iniciar" id="btn_empezar_recorrido_1">
        Iniciar recorrido
      </div>
      <div className="button-iniciar" id="btn_empezar_recorrido_2">
        Iniciar recorrido
      </div>
      <div className="button-iniciar" id="btn_empezar_recorrido_3">
        Iniciar recorrido
      </div>
      <div className="button-iniciar" id="btn_empezar_recorrido_4">
        Iniciar recorrido
      </div>
      <div className="button-iniciar" id="btn_empezar_recorrido_5">
        Iniciar recorrido
      </div>
      <div className="button-iniciar" id="btn_empezar_recorrido_6">
        Iniciar recorrido
      </div>
      <div id="horizontalContainer" className="container-mb-horizontal center-mb-horizontal" style={{ display: 'none', width:'100vw',height:'100vh',margin:'auto',top: '0',left:'0',background:'#5d5555ba',position:'absolute',zIndex: 60,color:'white',justifyContent:'center', alignItems:'center'}}>
      <span style={{fontSize:'3vh', margin:'0 7vh', textAlign:'center', lineHeight:'4vh', fontWeight:'bold'}}>
        Pon tu celular en posición horizontal para poder acceder a la experiencia
        <br />
        <img
          style={{
            width: '13vh',
            filter: 'invert(1)',
            margin: '3vh auto',
          }}
          src="https://cdn.discordapp.com/attachments/890813923136249867/1148495611373568020/horizontal-icono.png"
          alt="Icono horizontal"
          />
      </span>
    </div>


    </Container>
   
  );
};

export default memo(ModelViewer);
