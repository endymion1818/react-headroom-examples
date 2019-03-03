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
    <p>This site is to demonstrate some of the features of <code>react-headroom</code> and help debug new features before merging to master.</p>
    <p>Please visit <a href="https://kyleamathews.github.io/react-headroom/">The Docs</a> for more information.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
