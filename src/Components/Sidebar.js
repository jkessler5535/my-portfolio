import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import {Row, Col} from 'react-bootstrap';
import '../Styles/Sidebar.css';



const Sidebar = () => {
  return (
    <div className="sidebar">
      <Row>
        <Col xs={12}>
          <div className="social-links">
            <ul className="social-links-list">
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
            <div className="line"></div>
          </div>
        </Col>
      </Row>

    </div>
  );
};

export default Sidebar;