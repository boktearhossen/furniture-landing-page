import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { auth } from '../Utils/Firebase'
import { updateUser } from '../Redux/Slices/authSlice'
import { useDispatch } from "react-redux";

function RouteWrapper() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(!authUser) return dispatch(updateUser(null));
        dispatch(updateUser({
            ...authUser?.providerData[0]
        }));
    })
    return () => {
        unsubscribe()
    }
},[ ])




  return (
    <>
      <Header/> 
      <Outlet/>
      <Footer/> 
    </>
  )
}

export default RouteWrapper