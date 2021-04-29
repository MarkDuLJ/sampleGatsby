import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"

import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, i) => {
          const [tagName, value] = tag
          const slug = slugify(tagName, { lower: true })
          return (
            <Link key={i} to={`/tags/${slug}`}>
              {tagName} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
