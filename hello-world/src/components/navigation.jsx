import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const container = {
  display: "flex",
}

const element = {
  flex: "1",
  textAlign: "center",
  color: "white",
  padding: "10px 15px",
}

const NavLink = styled(Link)`
  background-color: ${({ active }) => (active === "true" ? "red" : "blue")};
`

export default () => {
  const [path, setPath] = useState("index")
  return (
    <nav css={container}>
      <NavLink
        css={element}
        onClick={ev => setPath("index")}
        active={(path === "index").toString()}
        to="/"
      >
        Inicio
      </NavLink>
      <NavLink
        css={element}
        onClick={ev => setPath("about")}
        active={(path === "about").toString()}
        to="/about"
      >
        Acerca de
      </NavLink>
    </nav>
  )
}
