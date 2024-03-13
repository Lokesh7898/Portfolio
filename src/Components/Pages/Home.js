import React from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {
  // const { title, content, imgUrl } = props.data;

  return (
    <>
      <div className="homeClass text-info">
        <div className="container pt-5 text-center intro">
          <div className="intro1">
            <h1>
              <b>HI, I am</b>
            </h1>
            <h1 className="nameAnimation">
              <b>Lokesh Patidar</b>
            </h1>
            <span className="text-warning">Web Developer..</span>
            <br />
            <a
              href="lokesh patidar resume.pdf"
              download="lokesh Patidar Resume.pdf"
              className="resumeBtn1 btn mt-5 border"
            >
              <FontAwesomeIcon icon="fa-solid fa-download" />
              &nbsp;Resume
            </a>
            <h3 className="text-center text-info container pt-5">
              Coding is the art of turning imagination into innovation through
              technology's.
            </h3>
          </div>
        </div>

        <div className=" mt-5 text-center container">
          <h1 className="allneed">
            <b>All the need that you want</b>
          </h1>
          <p>
            all the need you want is that it's easy to customize, pixel perfect,
            full support, clean design, ontime project, built with sass and soo
            on.
          </p>
        </div>

        <div className="text-center">
          <div className="d-flex crdhvr">
            <div className="card container icons allneedcard mt-5 mx-5 ">
              <i className="fa-solid fa-gear p-3" id="icons" />
              <h4 className="crdname">
                <b>Easy to Customize</b>
              </h4>
              <p className="textcls">
                Easy-to-customize frontend components with clear documentation,
                flexible APIs, and support for theming and styling variations.
              </p>
            </div>
            <div className="card container icons allneedcard mt-5 mx-5">
              <i className="fa-brands fa-pix p-3" id="icons" />
              <h4 className="crdname">
                <b>Pixel Perfect</b>
              </h4>
              <p className="textcls">
              Pixel-perfect refers to precise alignment of UI elements to match design mockups, ensuring accurate rendering and visual consistency.
              </p>
            </div>
          </div>

          <div className="card container icons allneedcard mt-5  thirdcard crdhvr">
            <i className="fa-solid fa-comment p-3" id="icons" />
            <h4 className="crdname">
              <b>Full Support</b>
            </h4>
            <p className="textcls">
            Full support entails compatibility across browsers, devices, and screen sizes, ensuring optimal functionality, performance, and user experience.
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="d-flex crdhvr">
            <div className="card container icons allneedcard mt-5 mx-5">
              <i className="fa-solid fa-ranking-star p-3" id="icons" />
              <h4 className="crdname">
                <b>Clean Design</b>
              </h4>
              <p className="textcls">
              Clean designs prioritize simplicity, clarity, and consistency, using whitespace, intuitive navigation, and minimalistic elements for enhanced usability and aesthetics.
              </p>
            </div>
            <div className="card container icons allneedcard mt-5 mx-5">
              <i className="fa-regular fa-clock p-3" id="icons" />
              <h4 className="crdname">
                <b>Ontime Project</b>
              </h4>
              <p className="textcls">
              Ontime project completion meets deadlines, follows timelines, adheres to schedules, and delivers within agreed-upon timeframes, fostering client satisfaction and trust.
              </p>
            </div>
          </div>

          <div className="card container icons allneedcard mt-5 crdhvr">
            <i className="fa-solid fa-thumbs-up p-3" id="icons" />
            <h4 className="crdname">
              <b>Built with SASS</b>
            </h4>
            <p className="textcls">           
            Build with SASS enables efficient CSS authoring, offering variables, nesting, mixins, and functions to streamline styling workflow and enhance maintainability.
            </p>
          </div>
        </div>

        <div className="tech">
          <h1 className="text-center mt-5 technologies">
            <b>Technologies</b>
          </h1>
        </div>

        <div className="row-4 container d-flex gap-3 px-3 my-5">
          <div className="card col-4 my-5 p-2 crd">
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
          <div className="card col-4 p-2 crd">
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
          <div className="card col-4 my-5 p-2 crd">
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
          <div className="card col-4 my-5 p-2 crd">
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
          <div className="card col-4 p-2 crd">
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
          <div className="card col-4 my-5 p-2 crd">
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
          <div className="card col-4 my-5 w-50 p-2 crd">
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

export default Home;
