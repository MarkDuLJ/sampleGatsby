import React from "react"

import Navbar from "./Navbar"
import Foot from "./Foot"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Foot />
    </>
  )
}

export default Layout
