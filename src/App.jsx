/* eslint-disable no-unused-vars */
import './components/todo/todo.css'
import Header from './components/layout/header/header'
import Footer from './components/layout/footer/footer'
import { Outlet } from 'react-router-dom'
import { getAccountAPI } from './services/api.service'
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/context/auth.context'



const App = () => {
  const { setUser } = useContext(AuthContext)
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
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}




export default App
