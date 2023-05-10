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
    const formatRules: any = [
      { divisor: 1e6, suffix: " Million" },
      { divisor: 1e9, suffix: " Billion" },
      { divisor: 1e12, suffix: " Trillion" },
    ];

    for (const rule of formatRules) {
      if (number >= rule.divisor) {
        const mantissa = number / rule.divisor;
        console.log(mantissa.toFixed(1) + rule.suffix)
        return mantissa.toFixed(1) + rule.suffix;
      }
    }

    return number.toFixed(0);  
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
      </Container>
    </div>
  );
};

export default ClickerGame;
