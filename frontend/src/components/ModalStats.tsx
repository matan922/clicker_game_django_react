import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import { useAppSelector } from "../app/hooks";

const ModalStats = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const clicker = useAppSelector((state) => state.clicker);
  const cursors = clicker.cursors.value
  const clicks = clicker.clicks;
  const coins = clicker.coins;
  const workers = clicker.workers;

  const handleClose = () => {
    setShow(false);
    navigate("..");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Statistics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Clicks: <Counter clicks={clicks} />
          </div>
          <div>Cursors: <Counter cursors={cursors} /></div>
          <div>Workers: <Counter workers={workers.value} /></div>
          <div>Coins: <Counter coins={coins} /></div>
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
