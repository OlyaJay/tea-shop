import { createSlice } from "@reduxjs/toolkit"

interface UserData {
    user: {
        id: number
        email: string
        name: string
        role: string
    } | null
}

const initialUser = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user") as string)
: null

const initialState: UserData = {
    user: initialUser
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        logout(state){
            state.user = null
            localStorage.removeItem("user")
        }
    }
})

export const {setUser, logout} = authSlice.actions
export default authSlice.reducer