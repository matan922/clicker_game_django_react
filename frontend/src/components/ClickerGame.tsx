import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Counter from "./Counter";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  incrementClicks,
  buyCursor,
  buyWorker,
} from "../reducers/clickerSlice";

const ClickerGame = () => {
  // const [count, setCount] = useState<number>(0)
  const clicker = useAppSelector((state) => state.clicker);
  const dispatch = useAppDispatch();

  const format = (number: number) => {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / 10 ** exponent
    console.log(new Intl.NumberFormat().format(number))
    if (exponent >= 6) {
      console.log(number + "M")
      return mantissa.toFixed(2) + "M"
    }

    console.log(number.toFixed(0))
    return mantissa.toFixed(0);
  };

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
        <Button onClick={() => dispatch(buyWorker())}>
          Buy Worker -- {workerCost}
        </Button>
        <Button onClick={() => format(3000000)}>Test</Button>
      </Container>
    </div>
  );
};

export default ClickerGame;
