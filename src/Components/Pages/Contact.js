import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="text-info ">
          <div className=" text-center">
            <h3>
              <b>
                Get in touch for projects or collaborations. Let's create
                something amazing together.
              </b>
            </h3>
          </div>
          <div className="row container ">
            <form className="form col-7 mx-5  border-info my-5 formClass">
              <div className="mt-2 text-center bg-info text-dark">
                <h3>Have a question? Please enquire below</h3>
              </div>
              <div>
                <label className="form-label mt-5">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div>
                <label className="form-label mt-3">Email : </label>
                <input type="email" className="form-control " />
              </div>
              <div>
                <label className="form-label mt-3">Contact : </label>
                <input type="number" className="form-control " />
              </div>
              <div>
                <label className="form-label mt-3">Message : </label>
                <textarea type="text" className="form-control " />
              </div>
              <div className="my-3">
                <h6>
                  Privacy <span className="text-danger">*</span>
                </h6>
                <span>
                  By using this form you agree with the storage and handling of
                  your data by this website. Please read our Privacy Policy for
                  more information on how we handle your data.
                </span>
              </div>
              <div>
                <span>
                  <input type="checkbox" />&nbsp; I Agree With Terms And Conditions.
                </span>
              </div>
              <button className="btn btn-primary my-3 container text-center">
                Enquire
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
