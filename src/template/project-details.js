import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/project-details.module.css'
import {Link,graphql} from 'gatsby'
import Img from 'gatsby-image'

export default function ProjectDetails  ({data}){
    const {html} = data.markdownRemark
    const {title,stack,featuredImg} = data.markdownRemark.frontmatter
    console.log(featuredImg)
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}> 
                    <Img fluid={featuredImg.childrenImageSharp.fluid}/>
                </div>

                {/* for dynamic html from markdown */}
                <div className={styles.html} dangerouslySetInnerHTML={{__html: html}}/>
            </div>
        </Layout>
    );
}

//the context passed in gatsby-node file will be available in $slug
//query name has tobe unique in projects
export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  
`

