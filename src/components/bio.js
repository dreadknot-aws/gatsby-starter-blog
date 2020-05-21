/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/image0.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            twitch
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div style={{
        display: 'block',
    }}
    >
      <p>
        Mostly games and music - the SF Bay Area
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}
      >
          <div>
            <a href={`https://instagram.com/${social.twitter}`}>
              Instagram
        </a>
          </div>
          <div>
        <a href={`https://www.twitch.tv/${social.twitch}`}>
          Twitch
        </a>
      </div>
      </div>
      </div>
    </div> 
  )
}

export default Bio
