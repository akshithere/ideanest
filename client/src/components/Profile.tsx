import Post from '../components/Post'
export default function Profile() {
    return (
       <div className=''>
        <div className='pb-5 mx-5 shadow-2xl flex justify-center items-center rounded-xl'>
        <h1 className='font-bold text-4xl text-white font-primaryFont'><i>"Whats on your mind? Share it to the world, it can be the next big thing!"</i> </h1>
       <div className='mt-4'>
       <Post />
       </div>
        </div>
       </div>
    );
}
