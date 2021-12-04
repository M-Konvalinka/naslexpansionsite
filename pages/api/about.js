// funtion below needs to be called somewhere in the index or _app.js file

function About(){
  return <div>TEST </div>
}

/// function is not compliling correctly to push the component to the /api/about page 
About();

export default About

/*
export default function About() {
    return (
      <div>
           Testing About Page
      </div>
    )
  }

About();

*/ 