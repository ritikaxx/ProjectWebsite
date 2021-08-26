import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";
import { outboundLink } from "react-ga";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <>
          <div className="left" key={id++}>
          <a href={projects.url} >
            <div id="container" className="item-wrap">
              <div class="product-details">
                <h1>{projects.title}</h1>
                <br />
                <p class="information"><br /> {projects.category}</p>
                <div class="control">

                </div>
              </div>
              <div class="product-image">
                <img src={projectImage} />
                <div class="info">
                  <h2>Features we provide</h2>
                 <ul>
                   <li>
                        {projects.f1}
                   </li>
                   <br />

                   <li>
                   {projects.f2}

                   </li>
                   <br />

                   <li>
                   {projects.f3}

                   </li>

                   </ul>
                </div>
              </div>

            </div>
            </a>
          </div>

        </>
      );
    });

    const blog = this.props.data.blog.map(function (blog) {
      let blogImage = "images/portfolio/" + blog.image;

      return (
        <>
          
          <div key={id++}>


            <ul className="cards">
              <li>
                <a href="" className="card">
                  <img src={blogImage} class="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                      <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                      <div className="card__header-text">
                      <a href={blog.url} ><h3 className="card__title">{blog.title} </h3></a>
                        
                      </div>
                    </div>
                    <p className="card__description">{blog.category}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </>
      );
    });

    const designs = this.props.data.designs.map(function (designs) {
      let designImage = "images/portfolio/" + designs.image;

      return (

        <div key={id++} className="columns portfolio-item">

          <div className="item-wrap">
          <a href={designs.url} >
            <Zmage alt={designs.title} src={designImage} />
            <div style={{ textAlign: "center", color: "black" }}>{designs.title}</div>
            </a>
          </div>
        </div>

      );
    });



    return (
      <>

        <section id="portfolio">

          <Fade left duration={1000} distance="40px">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Works.</h1>

                <div
                  id="portfolio-wrapper"
                  className="bgrid-quarters s-bgrid-thirds cf"
                >
                  {projects}
                </div>
              </div>
            </div>
          </Fade>
        </section>

        <section id="portfolio">
          <Fade left duration={1000} distance="40px">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>Check Out my Blogs</h1>

                <div
                  id="portfolio-wrapper"
                  className="bgrid-quarters s-bgrid-thirds cf"
                >
                  {blog}
                </div>
              </div>
            </div>
          </Fade>
        </section>

        <section id="portfolio">
          <Fade left duration={1000} distance="40px">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Designs</h1>

                <div
                  id="portfolio-wrapper"
                  className="bgrid-quarters s-bgrid-thirds cf"
                >
                  {designs}
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </>
    );
  }
}

export default Portfolio;
