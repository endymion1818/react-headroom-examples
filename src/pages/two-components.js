import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Headroom>
        <Header/>
    </Headroom>
    <Headroom>
        <ul
            style={{
                backgroundColor: "wheat",
                listStyle: "none"
            }}
        >
         <li
            style={{display: "inline-block"}}
         >
            Headroom #2
         </li>
        </ul>
    </Headroom>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
