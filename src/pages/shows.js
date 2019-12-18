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
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.allTwitchvideo.edges.map(({ node }, index) => (
              <tr key={index}>
                <td><a href={node.url}>{node.title}</a></td>
                <td>{node.description}</td>
                {/* <td><a href={node.url}>Watch</a></td> */}
                <td>{node.published_at}</td>
                {/* <td>{node.view_count}</td> */}
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
          description
          url
          type
          published_at(fromNow: true)
          view_count
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