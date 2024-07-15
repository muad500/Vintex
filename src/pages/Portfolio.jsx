import '../styles/Portfolio.css'

export default function Portfolio(){
    const projectsData = [
        {
            image: "https://i.imgur.com/oYiTqum.jpg",
            title: "Project One",
            summary: "This is a brief summary of Project One."
        },
        {
            image: "https://i.imgur.com/2DhmtJ4.jpg",
            title: "Project Two",
            summary: "This is a brief summary of Project Two."
        },
        {
            image: "https://i.imgur.com/oYiTqum.jpg",
            title: "Project Three",
            summary: "This is a brief summary of Project Three."
        },
        {
            image: "https://i.imgur.com/2DhmtJ4.jpg",
            title: "Project Four",
            summary: "This is a brief summary of Project Four."
        }
];
    const feedbackData = [
        { photo: "https://i.imgur.com/7D7I6dI.png", name: "John Doe", review: "Great service, very satisfied with the results." },
        { photo: "https://i.imgur.com/sjLMNDM.png", name: "Jane Smith", review: "Professional team and excellent support." },
        { photo: "https://i.imgur.com/7D7I6dI.png", name: "Michael Johnson", review: "Highly recommend this company for web development." }
]   ;

    return (
    <>
        <div className='container'>
          <h1>Portfolio</h1>
          <div className='subtitle'>
              <p> Earum error id voluptatum! ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
        </div>
        
         <div className="project-showcases">
         {projectsData.map((project, index) => (
             <div key={index} className="project-card">
             <img src={project.image} alt={project.title} className="project-image" />
             <div className="project-overlay">
                 <h3 className="project-title">{project.title}</h3>
                 <p className="project-summary">{project.summary}</p>
             </div>
             </div>
         ))}
     </div>
    
        <div className='portfolio-page'>
            <section className='intro'>
                <h1>Showcasing Our Best Works</h1>
                <p>Checkout our amazing projects and services</p>
            </section>

            <section className='portfolio'>
                <h1>Our Portfolio</h1>
                <ul>
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Mobile App Development</li>
                    <li>E-commerce Solutions</li>
                    <li>SEO and Digital Marketing</li>
                </ul>
            </section>

            <section className="project-showcases">
        <h2>Our Projects</h2>
        <div className="cards">
          {projectsData.map((project, index) => (
            <div key={index} className="card">
              <img src={project.image} alt={project.title} className="card__image" />
              <div className="card__overlay">
                <div className="card__header">
                  <img className="card__thumb" src={project.image} alt={project.title} />
                  <div className="card__header-text">
                    <h3 className="card__title">{project.title}</h3>
                  </div>
                </div>
                <p className="card__description">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


<section className="client-feedback">
        <h2>Client Feedback</h2>
        <div className="feedback-cards">
          {feedbackData.map((feedback, index) => (
            <div key={index} className="feedback-card">
              <img src={feedback.photo} alt={feedback.name} className="feedback__photo" />
              <div className="feedback__text">
                <h3 className="feedback__name">{feedback.name}</h3>
                <p className="feedback__review">{feedback.review}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
        </div>
    </>
    )
}