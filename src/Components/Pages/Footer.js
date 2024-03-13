import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <>
    <footer className="text-white text-center my-3">
    <div className='d-flex gap-3 justify-content-center'>
   <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"><FontAwesomeIcon icon={faEnvelope} className='footerClass'/></a>  &nbsp;
    <FontAwesomeIcon icon="fa-brands fa-facebook"  className='footerClass'/> &nbsp;
   <a href="https://www.google.co.in/"><FontAwesomeIcon icon="fa-brands fa-google" className='footerClass'/></a>  &nbsp;
   <a href="https://www.linkedin.com/in/lokesh-patidar-383b21246/"><FontAwesomeIcon icon="fa-brands fa-linkedin" className='footerClass'/></a>  &nbsp;
   <a href="https://www.instagram.com/l_u_c_k_y_p_a_t_i_d_a_r_/"> <FontAwesomeIcon icon="fa-brands fa-instagram" className='footerClass'/></a> &nbsp;
   <a href="https://www.youtube.com/channel/UCChCzDojj7x3pYY--xoZA2Q"><FontAwesomeIcon icon="fa-brands fa-youtube" className='footerClass'/></a>  &nbsp;
   <a href="https://github.com/Lokesh7898"><FontAwesomeIcon icon="fa-brands fa-github" className='footerClass'/></a>  &nbsp;
    </div>
    <div className='my-2'>
        &copy; Copyright 2024
    </div>
  </footer>
    </>
  )
}

export default Footer
