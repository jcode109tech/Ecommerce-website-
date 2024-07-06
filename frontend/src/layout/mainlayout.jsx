import React from "react";
import { Outlet } from 'react-router-dom'

import Navbar from "../pages/landing/Navbar";
import Footer from "../pages/landing/Footer";


const mainlayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer/>
    </>
  )
}

export default mainlayout
