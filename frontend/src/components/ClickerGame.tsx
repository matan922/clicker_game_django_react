import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Counter from "./Counter";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { incrementClicks, buyCursor, buyWorker, checkIncrementPerSecond } from "../reducers/clickerSlice";

const ClickerGame = () => {
  // const [count, setCount] = useState<number>(0)
  const clicker = useAppSelector((state) => state.clicker);
  const dispatch = useAppDispatch();
  
  const coins = clicker.coins;
  const cursorCost = clicker.cursors.cursorCost;
  const workerCost = clicker.workers.workerCost;
  return (
    <div>
      <Container fluid>
        <div>
          <Counter coins={coins} />
        </div>
        <Button onClick={() => dispatch(incrementClicks())}>Click</Button>
        <Button onClick={() => dispatch(buyCursor())}>
          Buy Cursor -- {cursorCost}
        </Button>
        <Button onClick={() => dispatch(buyWorker())}>Buy Worker -- {workerCost}</Button>
      </Container>
    </div>
  );
};

export default ClickerGame;
