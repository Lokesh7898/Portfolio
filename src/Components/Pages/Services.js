import React from "react";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      <div className="services py-5">
        <div className=" text-center container">
          <h1 className="allneedservices">
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
              <h4 className="crdnameservices">
                <b>Easy to Customize</b>
              </h4>
              <p className="textclsservices">
                Easy-to-customize frontend components with clear documentation,
                flexible APIs, and support for theming and styling variations.
              </p>
            </div>
            <div className="card container icons allneedcard mt-5 mx-5">
              <i className="fa-brands fa-pix p-3" id="icons" />
              <h4 className="crdnameservices">
                <b>Pixel Perfect</b>
              </h4>
              <p className="textclsservices">
                Pixel-perfect refers to precise alignment of UI elements to
                match design mockups, ensuring accurate rendering and visual
                consistency.
              </p>
            </div>
          </div>

          <div className="card container icons allneedcard mt-5  thirdcard crdhvr">
            <i className="fa-solid fa-comment p-3" id="icons" />
            <h4 className="crdnameservices">
              <b>Full Support</b>
            </h4>
            <p className="textclsservices">
              Full support entails compatibility across browsers, devices, and
              screen sizes, ensuring optimal functionality, performance, and
              user experience.
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="d-flex crdhvr">
            <div className="card container icons allneedcard mt-5 mx-5">
              <i className="fa-solid fa-ranking-star p-3" id="icons" />
              <h4 className="crdnameservices">
                <b>Clean Design</b>
              </h4>
              <p className="textclsservices">
                Clean designs prioritize simplicity, clarity, and consistency,
                using whitespace, intuitive navigation, and minimalistic
                elements for enhanced usability and aesthetics.
              </p>
            </div>
            <div className="card container icons allneedcard mt-5 mx-5">
              <i className="fa-regular fa-clock p-3" id="icons" />
              <h4 className="crdnameservices">
                <b>Ontime Project</b>
              </h4>
              <p className="textclsservices">
                Ontime project completion meets deadlines, follows timelines,
                adheres to schedules, and delivers within agreed-upon
                timeframes, fostering client satisfaction and trust.
              </p>
            </div>
          </div>

          <div className="card container icons allneedcard mt-5 crdhvr">
            <i className="fa-solid fa-thumbs-up p-3" id="icons" />
            <h4 className="crdnameservices">
              <b>Built with SASS</b>
            </h4>
            <p className="textclsservices">
              Build with SASS enables efficient CSS authoring, offering
              variables, nesting, mixins, and functions to streamline styling
              workflow and enhance maintainability.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
