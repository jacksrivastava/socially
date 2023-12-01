import { Routes, Route } from 'react-router-dom'

import './globals.css'

function App() {
  

  return (
    <> 
   <main className='flex h-screen'>
    <Routes>
         {/* public Routes */}
         <Route path='/sign-in' element={<SignInForm/>} />

         {/* private ROutes  */}
         <Route index element={<Home />}  />


    </Routes>
   </main>
    </>
  )
}

export default App
