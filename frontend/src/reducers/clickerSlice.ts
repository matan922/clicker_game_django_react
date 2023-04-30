import { createSlice  } from '@reduxjs/toolkit'

const clickerSlice = createSlice({
    name: 'clicker',
    initialState: {
      value: 0
    },
    reducers: {
      incremented: state => {
        state.value += 1
      },
    }
  })
  
  export const { incremented } = clickerSlice.actions

  export default clickerSlice.reducer;
