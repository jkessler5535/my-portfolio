import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import {Row, Col} from 'react-bootstrap';
import './Sidebar.css';



const Sidebar = () => {
  return (
    <div className="sidebar">
      <Row>
        <Col xs={12}>
          <div className="social-links">
            <ul className="social-links-list">
              <li>
                <a href="www.github.com/jkessler5535" target="_blank"><FaGithub className="s-icon"/></a>
              </li>
              <li>
                <a href="www.linkedin.com/jkessler5535" target="_blank"><FaLinkedin className="s-icon"/></a>
              </li>
              <li>
                <a href="www.twitter.com/jkessler5535" target="_blank"><FaTwitter className="s-icon"/></a>
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