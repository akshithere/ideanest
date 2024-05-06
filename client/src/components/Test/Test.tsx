import { useAuthTestQuery } from "../../app/services/AuthApi"
export default function Test(){
const {data} = useAuthTestQuery()
console.log(data)
    return(
        <>
        <h1 className="text-white font-primaryFont text-6xl ">{data}</h1>
        </>
    )
}