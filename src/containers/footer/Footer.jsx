import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
        Do you want to step in to the future before others
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        
        <p>
        <Link to="/EarlyAccess" className="gpt3_navbar_btn">Request Early Access</Link>
        </p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>The LNMIIT, Jaipur, Rajasthan, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>The LNMIIT, Jaipur</p>
          <p>7417673600</p>
          <p>sanyam2001.jain@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer