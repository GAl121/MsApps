/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

// initial state object
const initialState = {
  items: [],
  currentIndex: 0,
  data: [],
  isLoading: false,
  error: {
    isError: false,
    message: '',
  },
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
    //set loading when fetching data
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    //set error and error message
    setError(state,action) {
      state.error.isError = !state.error.isError;
      state.error.isError ? state.error.message = action.payload : state.error.message = action.payloadstate.error.message = '';
    },
  },
});

export const slicerAction = slicer.actions;
export default slicer.reducer;
