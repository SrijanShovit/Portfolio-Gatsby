const path = require('path')

exports.createPages = async ({ graphql, actions}) => {

    //here graphql is a function
    const {data} =  await graphql(`
        query Projects{
            allMarkdownRemark {
            nodes {
            frontmatter {
                slug
                }
            }
        }
        }
        
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/projects/' + node.frontmatter.slug,
            component: path.resolve('./src/template/project-details.js'),  //this generates an absolute path
            context : {slug : node.frontmatter.slug}  //what data we want to have as query parameters

        })
    })

}