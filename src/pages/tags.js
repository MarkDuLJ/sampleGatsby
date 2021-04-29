import React from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"

import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, i) => {
            const [tagName, value] = tag
            const slug = slugify(tagName, { lower: true })
            return (
              <Link key={i} to={`/tags/${slug}`} className="tag">
                <h5>{tagName}</h5>
                <p>{value} recipes</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export default Tags
