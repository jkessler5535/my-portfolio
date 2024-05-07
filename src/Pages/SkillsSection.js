import React from 'react';
import {Card} from 'react-bootstrap';
import '../Styles/SkillsSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




const SkillsSection = () => {
  return (
    <div id="skillsSection" className="skills-section">
      <div className="h1-skills">
       <h1 className="skills-heading logo">Skills</h1>
      </div>  
        <div className="skills-content">
            <Card className="skill-card">
              <i class="fa-brands fa-html5 hover-effect"></i>
              <h1 className="hover-text">HTML</h1>
            </Card>
          <Card className="skill-card">
            <i class="fa-brands fa-css3 hover-effect"></i>
            <h1 className="hover-text">CSS</h1>
          </Card>
          <Card className="skill-card">
            <i class="fa-brands fa-js hover-effect"></i>
            <h1 className="hover-text">JavaScript</h1>
          </Card>
          <Card className="skill-card">
            <i class="fa-brands fa-react hover-effect"></i>
            <h1 className="hover-text">React</h1>
          </Card>
          <Card className="skill-card">
            <i class="fa-brands fa-bootstrap hover-effect"></i>
            <h1 className="hover-text">Bootstrap</h1>
          </Card>
          <Card className="skill-card">
            <i class="fa-brands fa-github hover-effect"></i>
            <h1 className="hover-text">Github</h1>
          </Card>
        </div>
    </div>
  );
};

export default SkillsSection;