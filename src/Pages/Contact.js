import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import '../Styles/Contact.css';




const Contact = () => {
  return(
    <div className="container" id="contact">
      <h1 className="logo h1-contact">Contact</h1>
      <p>Get in touch with me: <a href="mailto:jkessler5535@gmail.com">jkessler5535@gmail.com</a></p>
     
        <ul className="social-links">
          <li>
            <a href="https://www.github.com/jkessler5535" target="_blank" rel="noreferrer"><FaGithub className="s-icon"/></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jamie-kessler-b90591121/" target="_blank" rel="noreferrer"><FaLinkedin className="s-icon" /></a>
          </li>
          <li>
            <a href="https://www.twitter.com/jkessler5535" target="_blank" rel="noreferrer"><FaTwitter className="s-icon"/></a>
          </li>
        </ul>
    </div>
  )
}
export default Contact;