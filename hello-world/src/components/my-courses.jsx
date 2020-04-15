import React from "react"

const isAuth = false

export default ({ navigate }) => {
  if (!isAuth) {
    navigate("/app")
    return null
  }
  return (
    <div>
      <h1>Mis cursos</h1>
    </div>
  )
}
