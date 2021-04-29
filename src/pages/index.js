import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>SIMPLY RECIPES</h1>
              <h4>delicious recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
