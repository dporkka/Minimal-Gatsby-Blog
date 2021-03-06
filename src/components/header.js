import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.overlay}></div>
      <span className={headerStyles.heroContent}>
        <p className={headerStyles.brand}>
          <Link className="davidporkka"to="/">{data.site.siteMetadata.title}</Link>
          {/* { <Link className="dp" to="/">DP</Link>} */}
        </p>
        <p className={headerStyles.description}>
        {data.site.siteMetadata.description}
        </p>
      </span>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
              Bio
            </Link>
          </li>
          <li>
            <Link to="/now/" activeClassName={headerStyles.activeMenuItem}>
              Now
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeClassName={headerStyles.activeMenuItem}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/projects/" activeClassName={headerStyles.activeMenuItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/tools/" activeClassName={headerStyles.activeMenuItem}>
              Tools
            </Link>
          </li>
          <li>
            <Link to="/#contactme" activeClassName={headerStyles.activeMenuItem}>
              Email
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
