import { Routes, Route } from 'react-router-dom'

import './globals.css'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignInForm'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

function App() {
  

  return (
    <> 
   <main className='flex h-screen'>
    <Routes>
         {/* public Routes */}
         <Route  element= {<AuthLayout/>}>
         <Route path='/sign-in' element={<SignInForm/>} />
         <Route path='/sign-in' element={<SignUpForm/>} />

         </Route>


         {/* private ROutes  */}
         <Route  element={<RootLayout/>}>
         <Route index element={<Home />}  />

        </Route>


    </Routes>
   </main>
    </>
  )
}

export default App
