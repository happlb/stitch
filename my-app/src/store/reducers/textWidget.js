import { createReducer, createAction } from "@reduxjs/toolkit";

const initState = {
  gridText: '',
  font: 'Ten',
};

export default createReducer(initState, {
  UPDATE_GRIDTEXT: (state, { payload }) => {
    state.gridText = payload ? payload : '';
  },
  UPDATE_FONT: (state, { payload }) => {
    state.font = payload ? payload : 'Ten';
  },
});

export const updateGridText = createAction("UPDATE_GRIDTEXT");
export const updateFont = createAction("UPDATE_FONT");
