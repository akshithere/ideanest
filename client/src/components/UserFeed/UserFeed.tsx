import { useGetUsersQuery } from "../../app/services/AuthApi"

export default function UserFeed(){
    const a = useGetUsersQuery();
    console.log(a)
    return(
        <>
        <h1 className='text-white h-screen text-6xl font-primaryFont font-bold'>Feed for the user </h1>

        </>
    )
}