import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const reducer = combineReducers({
    userReducer: userSlice
})

export default reducer