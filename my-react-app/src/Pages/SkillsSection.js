import React from 'react';
import {Card} from 'react-bootstrap';
import './SkillsSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const SkillsSection = () => {
  return (
    <div id="skillsSection" className="skills-section">
      <h1 className="skills-heading logo lg-c">Skills</h1>
      <div className="skills-content">
        <Card className="skill-card">
          <i class="fa-brands fa-html5"></i>
        </Card>
        <Card className="skill-card">
          <i class="fa-brands fa-css3"></i>
        </Card>
        <Card className="skill-card">
          <i class="fa-brands fa-js"></i>
        </Card>
        <Card className="skill-card">
          <i class="fa-brands fa-react"></i>
        </Card>
        <Card className="skill-card">
          <i class="fa-brands fa-bootstrap"></i>
        </Card>
        <Card className="skill-card">
          <i class="fa-brands fa-github"></i>
        </Card>
      </div>
    </div>
  );
};

export default SkillsSection;