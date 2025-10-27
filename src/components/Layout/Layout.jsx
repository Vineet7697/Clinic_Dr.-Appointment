
import { Outlet } from 'react-router-dom'
import Header from '../UI/Header';
import Footer  from '../UI/Footer';

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout