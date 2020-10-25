// import {createReducer} from "redux"
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/textWidget.js'

export default configureStore({
  reducer: rootReducer,
  devTools: true
})
