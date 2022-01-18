import Navbar from 'components/Navbar';
import React from 'react'
import { Outlet } from 'react-router-dom';
const Layouts = () => {
    return (
        <div className='mainContainer'>
            <Navbar/>            
            <Outlet/>            
        </div>
    )
}

export default Layouts;
