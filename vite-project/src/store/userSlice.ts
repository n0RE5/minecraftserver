import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userReducer",
    initialState: {
        isAuth: false,
        user: {}
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setIsAuth(state, action) {
            state.isAuth = action.payload
        }
    }
})

export default userSlice.reducer
export const { setUser, setIsAuth } = userSlice.actions