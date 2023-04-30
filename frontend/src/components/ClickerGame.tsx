import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ClickCounter from "./ClickCounter";

const ClickerGame = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <Container fluid>
        <ClickCounter clickCount={count} />
        <Button onClick={() => setCount(count + 1)}>Click</Button>
      </Container>
    </div>
  );
};

export default ClickerGame;
