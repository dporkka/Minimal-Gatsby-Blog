import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <Metadata title="404" description="Error page" />
      <div className="error-page">
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/blog/">Check out my latest articles</Link>
      </p>
      </div>
    </Layout>
  )
}

export default NotFound
