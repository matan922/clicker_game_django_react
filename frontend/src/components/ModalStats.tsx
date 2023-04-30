import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import ClickCounter from "./ClickCounter";

const ModalStats = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    console.log(navigate("/"));
    navigate("..");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Statistics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Clicks: </p>
            <p>Workers: </p>
            <p>Coins: </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalStats;
