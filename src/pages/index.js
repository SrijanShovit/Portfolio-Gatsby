import React from "react"
import Layout from '../components/Layout'
import * as  styles from '../styles/home.module.css'
import {Link,graphql} from 'gatsby'
import Img from "gatsby-image"


// the graphql data returned from query will be available as data inside props 
export default function Home({data}) {
  console.log(data)
  // const {title,description} = data.site.siteMetadata
  return (
    <Layout>

    <section className={styles.header}>
    
      <div>
        <h2>Observe</h2>
        <h3>Think & Develop</h3>
        <p>Flutter Developer | Backend Web Developer | ML Developer at Patna,India 🏳‍🌈</p>
        <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
      </div>
      <Img fluid={data.file.childImageSharp.fluid}/>
      {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%'}}/ > */}


        {/* <p>{title} - { description}</p> */}
    </section>
    </Layout>
  )
}

{/* making page queries */}
{/* export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
` */}

{/* ...GatsbyImageSharpFluid packs up all properites to be passed to image */}
export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

`

