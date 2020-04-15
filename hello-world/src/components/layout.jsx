import React from "react"
//import "../styles/global-secondary.css"
import Navigation from "./navigation"

export default ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
