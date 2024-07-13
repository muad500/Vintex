import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
export default function Layout(){
    return (
        <div className='overlay-dark'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}