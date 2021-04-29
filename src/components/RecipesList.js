import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        const slug = slugify(title, { lower: true })
        const sharpImage = getImage(image)
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={sharpImage}
              alt={title}
              className="recipe-img"
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | Cook: {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
