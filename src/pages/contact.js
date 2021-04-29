import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              La croix man braid literally iceland, hell of ennui vexillologist
              intelligentsia shoreditch gastropub 3 wolf moon blue bottle tumblr
              post-ironic.
            </p>
            <p>
              Cloud bread semiotics poutine before they sold out fashion axe 3
              wolf moon, biodiesel next level trust fund letterpress fixie
              vaporware narwhal snackwave.
            </p>
            <p>
              Thundercats polaroid authentic poutine plaid meh. Franzen cliche
              blue bottle ennui lomo tbh.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
