import { createSlice } from "@reduxjs/toolkit"

interface UserData {
    user: {
        id: number
        email: string
        name: string
        role: string
    } | null
}

const initialState: UserData = {
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload
        },
        logout(state){
            state.user = null
            localStorage.removeItem("user")
        }
    }
})

export const {setUser, logout} = authSlice.actions
export default authSlice.reducer