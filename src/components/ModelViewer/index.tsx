import React, { useState, useCallback, useMemo, useEffect, memo } from "react";
import { MdArrowBack } from "react-icons/md";

import Menu, { ItemProps } from "./Menu";
import { areas, subareas, subSubAreas } from "./areas";

import { Container } from "./styles";
import ContextualMenu from "./ContextualMenu";
import { Iframe } from "./Iframe";
import { Help } from "./Help";
import Hamburger from "./Hamburguer";

const initialTitle = "Eduverso";
const plantaUrl = "applications/Quellaveco_Molienda/Quellaveco_Molienda.html";

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
    (key) => {
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
        setVergeUrl(item.vergeUrl);
      }
      setTemp(2);
    },
    [currentItems]
  );

  const handleClickSubAreas = useCallback(
    (key) => {
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
    (key) => {
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
    setCanRenderHamburger(true);  
    setCurrentTitle(titleArea);
    setDisplaySubAreas({ display: "" });
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

  const handleChangeScene = useCallback((e) => {
    // console.log(e)
    setIdEquipo(e.target.value);
    setShowContextualMenu(true);
  }, []);

  const handleChangeBloque = useCallback((e) => {
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
  }, [handleChangeBloque]);

  return (
    <Container>
      <p className="viewer__title">{currentTitle}</p>
     {/*  <img className="viewer__title" src="/assets/imagenes/logo-eduverso-blanco.png"/> */}
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
        <button className="viewer__back" id="go-back" onClick={goBack}>
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
          {titleArea}
        </button>
      )}
      <ContextualMenu
        key={idEquipo}
        show={showContextualMenu}
        onClose={() => setShowContextualMenu(false)}
        id={idEquipo}
      />
    </Container>
  );
};

export default memo(ModelViewer);
