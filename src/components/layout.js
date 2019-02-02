import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
// eslint-disable-next-line import/no-extraneous-dependencies
import Particles from 'react-particles-js'
import Navbar from './navbar'

import './layout.css'

const Content = styled.div`
  width: 100%;
  height: 100vw;
  margin: 0px auto;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Particles params = {{
          "particles": {
              "number": {
                "value": 35,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "move": {
                "speed": 0.8,
              },
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 160,
                "line_linked": {
                  "opacity": 1
                }
              }
            }
          },
        }}/>
        <Navbar/>
        <Content>{children}</Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
