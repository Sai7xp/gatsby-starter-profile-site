import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info";


function index() {
  return (
    <div className="container-fluid">
      <Appbar />
      <Info/>
    </div>
  )
}

export default index
