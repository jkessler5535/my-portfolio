import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import '../Styles/Footer.css';

const Footer = () => {
  return(
    <div className="container" id="footer">
      <div>
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
    </div>
  )
}
export default Footer;