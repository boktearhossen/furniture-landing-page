import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardDrawer from '../Components/CardDrawer/CardDrawer'
import HomePage from './HomePage'
import LoginPage from './LoginPage/LoginPage'
import RouteWrapper from './RouteWrapper'
import SingleProducts from './SingleProducts'


function Page() {
  return (
    <>

     <Routes>
        <Route path="/" element={<RouteWrapper/>} >
          {/* homepage */}
         <Route index element={<HomePage/>}/>  
         <Route path="products/:id" element={<SingleProducts/>}/>
         {/* 404 page */}
         <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem", textAlign: "center" }}>
                            <p>404 Page not found</p>
                        </main>
                    }
                />

       {/* login page */}
       <Route path='login' element={<LoginPage/>} />
       <Route path='cart' element={<CardDrawer/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default Page