import { createSlice } from "@reduxjs/toolkit";
import { ClickerState } from "../models/ClickerInterface";

const initialState: ClickerState = {
  clicks: 0,
  coins: 0,
  workers: {
    workerCost: 10,
    value: 0,
    incrementBy: 1,
  },
  multip: 0,
  cursors: {
    cursorCost: 15,
    value: 1,
  },
};

const clickerSlice = createSlice({
  name: "clicker",
  initialState,
  reducers: {
    incrementClicks: (state) => {
      state.clicks += 1;
      state.coins += state.cursors.value;
    },

    buyCursor: (state) => {
      if (state.coins >= state.cursors.cursorCost) {
        state.coins -= state.cursors.cursorCost;
        state.cursors.value += 1;
        state.cursors.cursorCost = Math.round(state.cursors.cursorCost * 1.15);
      }
    },

    buyWorker: (state) => {
      if (state.coins >= state.workers.workerCost) {
        state.coins -= state.workers.workerCost;
        state.workers.value += 1;
        state.workers.workerCost = Math.round(state.workers.workerCost * 1.3);
      }
    },

    checkIncrementPerSecond: (state) => {
      const autoIncrements = [
        {
          workersValue: state.workers.value,
          workersIncrement: state.workers.incrementBy,
        },
      ];

      const incrementBy = [state.workers.incrementBy];
      for (let i = 0; i < autoIncrements.length; i++) {
        console.log(autoIncrements[i].workersIncrement);
        console.log(autoIncrements[i].workersValue);
        if (autoIncrements[i].workersValue > 0) {
          setInterval(() => {}, 1000);
        }
      }
    },
  },
  extraReducers: (builder) => {},
});

export const {
  incrementClicks,
  buyCursor,
  buyWorker,
  checkIncrementPerSecond,
} = clickerSlice.actions;

export default clickerSlice.reducer;
