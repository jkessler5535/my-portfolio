import '../Styles/Projects.css';




export default function Projects (){
  return(
    <div className="projects-section" id="projects">
       <div className="project-flex">
          <h1 className="logo h1-projects ">Projects</h1>
        </div>
      <div className="project-container">
        <h3 className="project-title">Avatar Builder</h3>
        <p className="project-description">
          A web application that allows users to create and customize their own avatars.</p>
          <p className="project-status">
            <span className="status-label">Status:</span> Currently in progress 
            <p>(Intern Project)</p>
          </p>
          <a
           href="https://github.com/jkessler5535/gogo-Builder.git" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="project-link"
         >
          View on github
          </a>
      </div>
      <div className="project-container">
        <h3 className="project-title">Simple Blog</h3>
        <p className="project-description">
         A web application on health and weekly blogs</p>
          <a
           href="https://github.com/jkessler5535/weather-app.git" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="project-link"
         >
          View on github
          </a>
      </div>
      <div className="project-container">
        <h3 className="project-title">Heavenly Cupcakes</h3>
        <p className="project-description">
         Simple CRUD application </p>
          <a
           href="https://github.com/jkessler5535/week16-18.git" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="project-link"
         >
          View on github
          </a>
      </div>
      <div className="project-container">
        <h3 className="project-title">Weather App</h3>
        <p className="project-description">
          A web application that displays the current weather for a given location.</p>
          <a
           href="https://github.com/jkessler5535/weather-app.git" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="project-link"
         >
          View on github
          </a>
      </div>
      <div className="project-summary">
        <p>
          For a more extensive collection of my work, including additional projects from my time at Promineo Tech and various lab work, please <a href="https://github.com/jkessler5535" target="_blank" rel="noopener noreferrer" className="portfolio-link">Take a Look!</a>.
        </p>
      </div>
    </div>  
  )
}