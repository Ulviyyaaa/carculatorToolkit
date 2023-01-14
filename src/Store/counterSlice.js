import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state,action) => {

      const{ilk , inp2}=action.payload
      state.value = Number(ilk) + Number(inp2)
    },
    decrement: (state,action) => {
        const{ilk , inp2}=action.payload
        state.value = Number(ilk) - Number(inp2)
      
    },
    multiply: (state,action) => {
        const{ilk , inp2}=action.payload
        state.value = Number(ilk) * Number(inp2)
      
    },
    divide: (state,action) => {
        const{ilk , inp2}=action.payload
        state.value = Number(ilk) / Number(inp2)
      
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, multiply, divide, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer