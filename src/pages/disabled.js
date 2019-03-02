import React from "react"
import Headroom from "react-headroom"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const SecondPage = () => (
  <Layout>
    <Headroom>
        <Header disabled/>
    </Headroom>
    <SEO title="Page two" />
    <h1>Headroom Pinning is Disabled</h1>
    <p>Welcome to page 2</p>
  </Layout>
)

export default SecondPage
