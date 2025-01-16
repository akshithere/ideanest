import { Outlet } from 'react-router-dom'
// basically placeholder for current route's all the children components
import Appbar from '../components/Appbar'



function RootLayout() {
  return (

    <div className="root scrollbar bg-custom-image brightness-90 bg-cover bg-center h-screen w-full h-full selection:text-bgPrimaryBg">
        <Appbar/>        
        <main className='main'>
            <Outlet/>
        </main>
    </div>


   
  )
}

export default RootLayout