import React from 'react';
import {Link,graphql,useStaticQuery} from 'gatsby'


//in page queries queries is written at bottom bcz we can use query variables there
//but we cannot use query variables in static queries so query is written at top
//useStaticQuery hook can be used only once in a component
export default function Navbar () {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                description
                title
            }
            }
        }
    `)

    const {title} = data.site.siteMetadata

    return (
        <nav>
            <h1>Code w' Passion {title}</h1>
           
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About </Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    );
}


