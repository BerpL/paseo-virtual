import React, { useState, useEffect } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Container } from "./styles";

export interface MenuHamburgerProps {
  onClickItem: (canRender: boolean) => void;
  canRender: boolean;
}

const Hamburger: React.FC<MenuHamburgerProps> = ({
  onClickItem,
  canRender,
}) => {
  const [styleSvg, setStyleSvg] = useState({});
  const [style, setStyle] = useState({});
  const clickHamburger = () => {
    onClickItem(canRender);
  };

  useEffect(() => {
    setStyleSvg(
      canRender
        ? { transform: "rotate(0deg)", color: "#fff" }
        : { transform: "rotate(-90deg)", color: "rgb(10, 180, 255)" }
    );
    setStyle(
      canRender ? { borderColor: "#fff" } : { borderColor: "rgb(10, 180, 255)" }
    );
  }, [canRender]);

  return (
    <Container onClick={clickHamburger} style={style}>
      <CgMenuLeftAlt style={styleSvg} />
    </Container>
  );
};

export default Hamburger;
