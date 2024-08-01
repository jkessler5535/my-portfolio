import '../Styles/Projects.css';
import React, {useEffect, useState } from 'react';
import Cloud from '../Images/cloudunsplash.jpg';
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


  // this is for the case study buttons
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  useEffect(() => {
    const caseStudyContent = document.querySelector('.case-study-content');
    console.log(caseStudyContent); // Check if the element is found
  }, []); // Empty dependency array to run the effect only once

  const toggleCaseStudy = () => {
    const caseStudyContent = document.querySelector('.case-study-content');
    caseStudyContent?.classList?.toggle('show');
    setShowCaseStudy(!showCaseStudy);
  };

  return(
    <div className="projects-section" id="projects">
       <div className="project-flex">
          <h1 className="logo h1-projects ">Projects</h1>
        </div>
      <div className="project-container">
        <div className="img-container">
          <img src={Cloud} className="project-logo" alt="weather-app" />
          <h3>Weather App</h3>
          {showCaseStudy && (
          <p>I built this fun weather app with HTML, CSS, React, and Javascript. It provides users with real-time weather info for any location.</p>
          
          )}
          <button className="show-content-button" onClick={toggleCaseStudy}>Read Case Study</button>
        </div>
        <div className="img-container">
          <img src={Soon} className="project-logo" alt="weather-app"/>
          <h3>GoGoBuilder</h3>
          <p>hello</p>
        </div>
        <div>
          
          <img src={Soon} className="project-logo" alt="weather-app"/>
          <h3>GoGoBuilder</h3>
          <p>howdy</p>
          
        </div>
        <div>
          <div>
            <img src={Soon} className="project-logo" alt="weather-app"/>
          </div>
          <div>
            <h3>GoGoBuider</h3>
            <p> hiii</p>
          </div>
        </div>
        <div>
            <img src={Soon} className="project-logo" alt="weather-app"/>
            <div>
              <h3>GoGoBuider</h3>
              <p> hiii</p>
            </div>
        </div>
        <div>
          <div>
            <img src={Soon} className="project-logo" alt="weather-app"/>
          </div>
          <div>
            <h3>GoGoBuider</h3>
            <p> hiii</p>
          </div>
        </div>
      </div>
    </div>  
  )
}