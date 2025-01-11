/* eslint-disable no-unused-vars */
import './components/todo/todo.css'
import Header from './components/layout/header/header'
import Footer from './components/layout/footer/footer'
import { Outlet } from 'react-router-dom'
import { getAccountAPI } from './services/api.service'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './components/context/auth.context'
import { Spin } from 'antd'


const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext)
  useEffect(() => {
    fetchUserIno()
  }, [])
  const fetchUserIno = async () => {
    const res = await getAccountAPI()
    if (res.data) {
      console.log(res.data.user)
      setUser(res.data.user)
      //success
    }
    setIsAppLoading(false)
  }
  return (
    <>
      {isAppLoading == true ?
        <Spin style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }} /> :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }
    </>
  )
}




export default App
