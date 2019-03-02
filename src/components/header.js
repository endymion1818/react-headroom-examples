import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import NavItems from './navitems'

const Header = ({ siteTitle, subTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        {NavItems && (
          <ul style={{
            listStyle: "none"
          }}>
            {NavItems.map(item => (
              <li style={{
                display: "inline-block"
              }}>
                <Link 
                  style={{
                    display: "block",
                    padding: "1rem",
                    color: "white"
                  }} 
                  to={item.url}
                >
                  {item.page}
                </Link>
              </li>
            ))}
        </ul>
        )}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Headroom Examples`,
  subTitle: ``,
}

export default Header
