
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import type { RootState } from "../../hooks/store";
import { useSelector } from "react-redux";




const host = import.meta.env.VITE_BACKENDURL;

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
           const token:any = useSelector((state:RootState)=>state.auth.token);
            headers.set(`token`,token)
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
            transformResponse:(data:any)=>{
                console.log("The response was from onrender server")
                return data;
            },
            invalidatesTags:['test'],
            
           }),
           loginUser: builder.mutation<{data:{user:any,isAuthenticated:boolean}},authInfo>({
            query: (loginData:{email:string,password:string}) => ({
                url:'/auth/login',
                method:'POST',
                body:loginData
            })
            
           }),
           getUsers: builder.query({
            query: ()=>`/user/users`
        })

           

    }),
    

})

export const {useSignupUserMutation,useLoginUserMutation,useAuthTestQuery,useGetUsersQuery} = authApi
