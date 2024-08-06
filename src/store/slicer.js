/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

// initial state object
const initialState = {
  items: [],
  currentIndex: 0,
  data: [],
};

const slicer = createSlice({
  name: 'ButtonsSlice',
  initialState: initialState,
  reducers: {
    // recive data from action, sort and set data state and update current index to 0
    setData(state, action) {
      state.data = action.payload.data.hits.sort((a,b) => a.id - b.id);
      state.currentIndex = 0;
    },
    //set the item to present on screen and setting current index
    getPagination(state,action) {
      state.currentIndex += action.payload;
      state.items = state.data.slice(state.currentIndex, state.currentIndex + 9);
    },
  },
});

export const slicerAction = slicer.actions;
export default slicer.reducer;
