import { createReducer, createAction } from "@reduxjs/toolkit";

const initState = {
  gridText: '',
  // vegan: false,
  // veg: false,
  // ingredents: [],
  // recipies: [],
};

export default createReducer(initState, {
  UPDATE_GRIDTEXT: (state, { payload }) => {
    state.gridText = payload ? payload : '';
  },
  // REMOVE_INGREDIENT: (state, { payload }) => {
  //   if (state.ingredents.includes(payload)) {
  //     state.ingredents.splice(state.ingredents.indexOf(payload), 1);
  //   }
  // },
  // ADD_INGREDIENT: (state, { payload }) => {
  //   if (payload && !state.ingredents.includes(payload)) {
  //     state.ingredents.push(payload);
  //   }
  // },
  // SET_VEG: (state, { payload }) => {
  //   state.veg = payload;
  // },
  // SET_VEGAN: (state, { payload }) => {
  //   state.vegan = payload;
  // },
});

export const updateGridText = createAction("UPDATE_GRIDTEXT");
export const removeIngredient = createAction("REMOVE_INGREDIENT");
export const addIngredient = createAction("ADD_INGREDIENT");
export const setVeg = createAction("SET_VEG");
export const setVegan = createAction("SET_VEGAN");
