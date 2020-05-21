import React from "react"
import { graphql, Link } from "gatsby"
import Container from "../components/container"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout location='myoldgoat' title='myoldgoat'>
    <Container>
    <div>
        <h1>Shows</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>description</th>
              {/* <th>Link</th> */}
              {/* <th>Age</th> */}
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </Container>
  </Layout>
)