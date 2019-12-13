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
              <th>Link</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.allTwitchvideo.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.title}</td>
                <td><a href={node.url}>{node.url}</a></td>
                <td>{node.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  </Layout>
)
export const query = graphql`
  query {
    allTwitchvideo {
      edges {
        node {
          title
          url
          type
        }
      }
    }
  }
  `

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
//   `