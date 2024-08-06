/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import slicer from './slicer';

const store = configureStore({
  reducer: {
      Data: slicer,
  }
});

export default store;
