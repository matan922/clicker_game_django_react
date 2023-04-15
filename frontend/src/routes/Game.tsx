import React from "react";
import { Outlet } from "react-router-dom";
import ClickerGame from "../components/ClickerGame";

const Game = () => {
  return (
    <div>
      <Outlet />
      <ClickerGame />
    </div>
  );
};

export default Game;
