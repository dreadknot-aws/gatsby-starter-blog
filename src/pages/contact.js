import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ 
    color: `teal`,
    justifyContent: 'center'
  }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>myoldgoatog@gmail.com
  </div>
)
