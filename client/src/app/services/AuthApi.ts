
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import type { RootState } from "../../hooks/store";




const host = 'http://localhost:3000';

export interface authInfo{
    uid?: number,
    fullName?: string,
    username: string,
    email: string,
    password: string,
    typeOfUser: string

}

const initialState = {
   isAuthenticated: false
} 



export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`${host}`,
        prepareHeaders(headers,{getState}){
           if((getState() as RootState).auth.isAuthenticated){
            headers.set(`isAuthenticated`,`true`)
           }
        }
    }),
    tagTypes:['test','signup','login'],
    
    endpoints:(builder)=>({
        authTest: builder.query<any,any>({
            query: ()=>`/auth/test`,
            providesTags:['test'],
            transformResponse: (res:string)=>{
            let split_str = res.split('')
            const revArr = split_str.reverse()
            const revstr = revArr.join('')
            return revstr;

            },
            
        }),
           signupUser: builder.mutation<string,authInfo>({
            query(userData:authInfo){
                return({
                    url:'/auth/register',
                    method:'POST',
                    body:userData
                })
            },
            invalidatesTags:['test'],
            
           }),
           loginUser: builder.mutation<{data:{user:any,isAuthenticated:boolean}},authInfo>({
            query: (loginData:{email:string,password:string}) => ({
                url:'/auth/login',
                method:'POST',
                body:loginData
            })
           })
           

    }),
    

})

export const {useSignupUserMutation,useLoginUserMutation,useAuthTestQuery} = authApi
