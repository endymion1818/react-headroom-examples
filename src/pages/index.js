import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Headroom>
        <Header/>
    </Headroom>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Default Headroom Styles</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
