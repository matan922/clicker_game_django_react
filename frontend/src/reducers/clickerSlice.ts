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
  cursors: {
    cursorCost: 15,
    value: 1,
  },
  totalIncrementBy: 0,
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

    autoIncrement: (state) => {
      state.totalIncrementBy = state.workers.incrementBy * state.workers.value;
      state.coins += state.totalIncrementBy
      console.log("total",state.totalIncrementBy);
      console.log("incrementby",state.workers.incrementBy);
      console.log("value",state.workers.value);

    },

    checkIncrementPerSecond: (state) => {
      // for (let i = 0; i < autoIncrements.length; i++) {
      //   console.log(autoIncrements[i].workersIncrement);
      //   console.log(autoIncrements[i].workersValue);
      //   if (autoIncrements[i].workersValue > 0) {
      //     setInterval(() => {}, 1000);
      //   }
      // }
    },
  },
  extraReducers: (builder) => {},
});

export const {
  incrementClicks,
  buyCursor,
  buyWorker,
  checkIncrementPerSecond,
  autoIncrement,
} = clickerSlice.actions;

export default clickerSlice.reducer;
