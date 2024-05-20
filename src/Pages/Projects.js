import '../Styles/Projects.css';
import weatherApp from '../Images/project1.png';
import Soon from '../Images/Soon.jpg';

export default function Projects (){
  return(
    <div className="projects-section" id="projects">
      <div className="project-flex">
          <h1 className="logo h1-projects ">Projects</h1>
        </div>
      <div className="project-container">
        <div className="img-container">
          <img src={weatherApp} className="project-logo" alt="weather-app"/>
          <img src={Soon} className="project-logo" alt="weather-app"/>
          <img src={Soon} className="project-logo" alt="weather-app"/>
          <img src={Soon} className="project-logo" alt="weather-app"/>
          <img src={Soon} className="project-logo" alt="weather-app"/>
          <img src={Soon} className="project-logo" alt="weather-app"/>
        </div>
      </div>
    </div>
  )
}