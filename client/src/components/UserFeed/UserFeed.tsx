import { useGetUsersQuery } from "../../app/services/AuthApi"

export default function UserFeed(){
    const {data,isLoading} = useGetUsersQuery();
    console.log("data from fetch is: ",data)
    if(isLoading)return <div className="text-white text-6xl font-primaryFont">Nigga its loading</div>
    return(
        <>
        <h1 className='text-white h-screen text-6xl font-primaryFont font-bold'>Feed for the user </h1>

        </>
    )
}