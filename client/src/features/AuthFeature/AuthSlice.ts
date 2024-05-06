import {createSlice, PayloadAction} from "@reduxjs/toolkit"
interface AuthData{
    isAuthenticated: boolean,
    token?: string
}
const initialState: AuthData = {
    isAuthenticated: false,
    token:''
}
export const authSlice = createSlice({
    name:'AuthSlice',
    initialState,
    reducers:{
        setCredentials(state,action:PayloadAction<{data:{user:any,isAuthenticated:boolean}}>){
            console.log("i'm inside setCredentials reducer of the authSlice")
            if(action.payload.data.isAuthenticated == true){
                 state.isAuthenticated = true
                //  state.token = action.payload.data.
            }

        },
        setToken(state,action:PayloadAction<{data:{token:string}}>){
            if(action.payload.data.token){
                state.isAuthenticated = true
                state.token = action.payload.data.token
                localStorage.setItem('signUpToken',state.token)
            }
        }
    }
})
export const {setCredentials,setToken} = authSlice.actions
export default authSlice.reducer