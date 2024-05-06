// import RenderPosts from "./RenderPosts/RenderPosts"
import { LampDemo } from "./Lamp/Lamp"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UseSelector, useSelector } from "react-redux"
import { RootState } from "../hooks/store"


export default function(){
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state:RootState)=>state.auth.isAuthenticated)
    const token = useSelector((state:RootState)=>state.auth.token)
    
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigate("/signup")
    //     },6000)
    // },[])
    
    if(isAuthenticated == true){
        console.log('This should be authenticated and the token set in state by setToken is: ', token)
    }
    if(isAuthenticated == false) return <div className="text-white text-6xl font-primaryFont">Unauthenticated</div>
return(
<div>
    
    
   
   
    <LampDemo />
    {}
    


</div>
)
}