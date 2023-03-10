import React from 'react'
import './footer.css'

import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
          Need an App?
        </h1>
      </div>

      <div className="footer-btn">
        <p>Contact Now</p>
      </div>

      {/* <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="logo" />
          <p> Arlwin Fajardo </p>
          <p> Manila, Philippines </p>
        </div>
        <div class></div>
      </div> */}

      <div className="footer-copyright">
        <p> 2023 Arlwin. All rights reserved. </p>
      </div>
    </div>
  )
}

export default Footer