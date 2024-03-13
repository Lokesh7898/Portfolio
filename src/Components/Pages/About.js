import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="p-5">
          <h1 className="text-center technologies">
            <b>Technologies</b>
          </h1>
        </div>

        <div className="row-4 container d-flex gap-3 px-3 my-5">
          <div className="card col-4 my-5 p-2 abtcrd">
            <div className="card-title text-center">
              <img
                src="/Components/images/html5.png"
                alt="html img"
                className="card-Img"
              />
              <h6 className="text-warning mt-3">
                <b>HTML</b>
              </h6>
              <p className="card-content">
                Hypertext Markup Language, standard language for creating web
                pages, defining structure and content using tags for browsers to
                interpret.
              </p>
            </div>
          </div>
          <div className="card col-4 p-2 abtcrd">
            <div className="card-title text-center">
              <img
                src="/Components/images/css3-logo-png-transparent.png"
                alt="img"
                className="card-Img"
              />
              <h6 className="text-warning mt-3">
                <b>CSS</b>
              </h6>
              <p className="card-content">
                Style sheet language used to define the visual presentation of
                HTML elements in web pages, enhancing design and layout.
              </p>
            </div>
          </div>
          <div className="card col-4 my-5 p-2 abtcrd">
            <div className="card-title text-center">
              <img
                src="/Components/images/logo.png"
                alt="img"
                className="card-Img"
              />
              <h6 className="text-warning mt-3">
                <b>MaterialUi</b>
              </h6>
              <p className="card-content">
                React component library based on Google's Material Design,
                offering pre-designed components for building user interfaces
                with consistency and elegance.
              </p>
            </div>
          </div>
        </div>
        <div className="row-4 container d-flex gap-3 px-3 my-5">
          <div className="card col-4 my-5 p-2 abtcrd">
            <div className="card-title text-center">
              <img
                src="/Components/images/bootstrap5.png"
                alt="img"
                className="card-Img"
              />
              <h6 className="text-warning mt-3">
                <b>Bootstrap 5</b>
              </h6>
              <p className="card-content">
                Front-end framework for responsive web design, providing
                pre-designed components and utilities to streamline development
                and ensure consistency.
              </p>
            </div>
          </div>
          <div className="card col-4 p-2 abtcrd">
            <div className="card-title text-center">
              <img
                src="/Components/images/js.png"
                alt="img"
                className="card-Img"
              />
              <h6 className="text-warning mt-3">
                <b>JavaScript</b>
              </h6>
              <p className="card-content">
                High-level programming language for web development, used to
                create dynamic and interactive content on websites, browsers,
                and servers.
              </p>
            </div>
          </div>
          <div className="card col-4 my-5 p-2 abtcrd">
            <div className="card-title text-center">
              <img
                src="/Components/images/react.png"
                alt="img"
                className="card-Img"
              />
              <h6 className="text-warning mt-3">
                <b>React</b>
              </h6>
              <p className="card-content">
                React: JavaScript library for building user interfaces, enabling
                component-based development, efficient rendering, and state
                management in web applications.
              </p>
            </div>
          </div>
        </div>
        <div className="row-4 container d-flex justify-content-center gap-3 px-3 my-5">
          <div className="card col-4 my-5 w-50 p-2 abtcrd">
            <div className="card-title text-center">
              <img
                src="/Components/images/GitHub-Logo.png"
                alt="img"
                className="card-Img bg-light"
              />
              <h6 className="text-warning mt-3">
                <b>GitHub</b>
              </h6>
              <p className="card-content">
                Platform for version control using Git, facilitating
                collaboration, code hosting, and project management, widely used
                by developers and teams.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
