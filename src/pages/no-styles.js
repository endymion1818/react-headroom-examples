import React from "react"
import Headroom from "react-headroom"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const HeaderWrapper = styled.div`
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    zIndex: 1;
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }
`

const SecondPage = () => (
  <Layout>
    <Headroom 
      wrapperStyle={{
        border: "1px solid red"
      }}
    >
        <Header disableInlineStyles/>
    </Headroom>
    <SEO title="Page two" />
    <h1>Headroom styles are Disabled</h1>
    <p>You can add your own styles with the supplied classes.</p>
  </Layout>
)

export default SecondPage
