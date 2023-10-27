import React, { useState, memo, useEffect } from "react";
import { FaArchive, FaCog, FaTimes } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { Container, ContainerFull, Table } from "./styles";
import { equiposIndexed, equiposInterface, tableInterface } from "./equipos";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export interface ContextualMenuProps {
  show: boolean;
  onClose: () => void;
  id: string;
}

const ContextualMenu: React.FC<ContextualMenuProps> = ({
  show,
  onClose,
  id,
}) => {
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [table, setTable] = useState<tableInterface[]>([]);
  const [btnClicked, setBtnClicked] = useState(false);
  const [haveImage, setHaveImage] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openModalTable, setOpenModalTable] = useState(false);

  useEffect(() => {
    const eq: equiposInterface = equiposIndexed[id];

    setBtnClicked(false);

    if (!eq) {
      setSrc("");
      setTable([]);
      setName("");
      return;
    }
    if (eq.rutaImgPartes === "none") {
      setHaveImage(false);
    }
    // setSrc(eq.rutaImgTabla);
    setTable(eq.tabla);
    setName(eq.nombre);
    setBtnClicked(false);
  }, [id, show]);

  const handleClickParts = () => {
    setBtnClicked(true);
    const eq: equiposInterface = equiposIndexed[id];
    if (!eq) return;
    if (!eq.rutaImgPartes) return;
    setSrc(eq.rutaImgPartes);
  };

  const handleClickOperation = () => {
    setBtnClicked(true);
    const eq: equiposInterface = equiposIndexed[id];
    if (!eq) return;
    if (!eq.rutaImgFuncionamiento) return;
    setSrc(eq.rutaImgFuncionamiento);
  };

  const handleClose = () => {
    setBtnClicked(false);
    onClose();
    setSrc("");
    setTable([]);
  };

  const onBack = () => {
    setBtnClicked(false);
    const eq: equiposInterface = equiposIndexed[id];
    if (!eq) return;
    // if (!eq.rutaImgTabla) return
    // setSrc(eq.rutaImgTabla);
  };

  return (
    <Container style={{ display: show ? "block" : "none" }}>
      <div className="close" onClick={handleClose}>
        <FaTimes />
      </div>
      <div className="eq__name">{name}</div>
      <button
        className="btn-back"
        style={{ display: btnClicked ? "flex" : "none" }}
        onClick={onBack}
      >
        <MdArrowBack />
      </button>
      <div
        className="table-container table-wrapper"
        style={{ display: !btnClicked ? "flex" : "none" }}
      >
        <Table
          className="table"
          style={{ cursor: "pointer" }}
          onClick={() => setOpenModalTable(true)}
        >
          {table.map((row) => {
            return (
              <div className="row">
                <div className="label">{row.label}</div>
                <div className="value">{row.value}</div>
              </div>
            );
          })}
        </Table>
      </div>
      <div
        className="table-container"
        style={{ display: btnClicked ? "flex" : "none" }}
      >
        <img src={src} alt="" onClick={() => setOpenModal(true)} />
      </div>
      {haveImage && (
        <div>
          <button
            className="btn-parts"
            onClick={handleClickParts}
            style={{ display: !btnClicked ? "flex" : "none" }}
          >
            <FaArchive />
            Partes Principales
          </button>
          <button
            className="btn-operation"
            onClick={handleClickOperation}
            style={{ display: !btnClicked ? "flex" : "none" }}
          >
            <FaCog />
            Principio de funcionamiento
          </button>
        </div>
      )}
      <Modal
        open={openModal}
        styles={{
          modal: { backgroundColor: "transparent", padding: 0 },
          closeButton: { outline: "none" },
          closeIcon: { fill: "#fff" },
        }}
        center
        onClose={() => setOpenModal(false)}
      >
        <ContainerFull>
          <img src={src} alt="" />
        </ContainerFull>
      </Modal>
      <Modal
        open={openModalTable}
        styles={{
          modal: { backgroundColor: "transparent", padding: 0 },
          closeButton: { outline: "none" },
          closeIcon: { fill: "#fff" },
        }}
        center
        onClose={() => setOpenModalTable(false)}
      >
        <ContainerFull>
          <Table className="table" style={{ marginTop: 50 }}>
            {table.map((row) => {
              return (
                <div className="row">
                  <div className="label">{row.label}</div>
                  <div className="value">{row.value}</div>
                </div>
              );
            })}
          </Table>
        </ContainerFull>
      </Modal>
    </Container>
  );
};

export default memo(ContextualMenu);
