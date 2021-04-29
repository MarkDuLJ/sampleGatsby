import React from "react"
import slugify from "slugify"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"

import Layout from "../components/Layout"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    prepTime,
    servings,
    content,
    description: { description },
    image,
  } = data.contentfulRecipe
  const finalImage = getImage(image)
  const { ingredients, instructions, tools, tags } = content
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage image={finalImage} alt={title} className="about-img" />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Prep Time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Serving Time</h5>
                  <p>{servings} min.</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:
                {tags.map((tag, i) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${slug}`} key={i}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction, i) => {
                return (
                  <div key={i} className="single-instruction">
                    <header>
                      <p>step {i + 1}</p>
                      <div></div>
                    </header>
                    <p>{instruction}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>instructions</h4>
                {ingredients.map((ingredient, i) => {
                  return (
                    <p key={i} className="single-ingredient">
                      {ingredient}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool, i) => {
                  return (
                    <p key={i} className="single-tool">
                      {tool}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      content {
        ingredients
        instructions
        tools
        tags
      }
      description {
        description
      }
      prepTime
      servings
    }
  }
`

export default RecipeTemplate
