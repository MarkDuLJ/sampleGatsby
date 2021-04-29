import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import RecipesList from "./RecipesList"
import TagsList from "./TagsList"

const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        title
        content {
          tags
        }
        id
        cookTime
        featured
        prepTime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
