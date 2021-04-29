import React from "react"

const Foot = () => {
  return (
    <footer className="page-footer">
      <p>
        {new Date().getFullYear()}&copy; <span>Recipes Website</span> Built with
        {""}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Foot
