import '../Styles/Projects.css';
import React, {useEffect} from 'react';
import weatherApp from '../Images/project1.png';
import Soon from '../Images/Soon.jpg';


export default function Projects (){
  useEffect(() => {
    const handleImageClick = () => {
      window.location.href = "https://weather-app-szno-jwft846hq-jamie-kesslers-projects.vercel.app/";
    };

    const images = document.querySelectorAll('.project-logo');
    images.forEach(image => {
      image.addEventListener('click', handleImageClick);
    });

    return () => {
      images.forEach(image => {
        image.removeEventListener('click', handleImageClick);
      });
    };
  }, []);

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