import * as React from 'react'
import  Layout  from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const  ArticlePost =({data,children}) => {
    return (
        <Layout pateTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <p>{data.mdx.body}</p>
        </Layout>
    )
}

export const query= graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head=({data})=> <Seo title={data.mdx.frontmatter.title}/>
export default ArticlePost