import { createSlice } from "@reduxjs/toolkit";
import { ClickerState } from "../models/ClickerInterface";

const initialState: ClickerState = {
  clicks: 0,
  coins: 0,
  workers: 0,
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
  },
  extraReducers: (builder) => {},
});

export const { incrementClicks, buyCursor } = clickerSlice.actions;

export default clickerSlice.reducer;
