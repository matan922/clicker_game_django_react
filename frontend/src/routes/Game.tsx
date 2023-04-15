import React from "react";
import { Outlet } from "react-router-dom";

const Game = () => {
  return (
    <div>
      <Outlet />
      hey
    </div>
  );
};

export default Game;
