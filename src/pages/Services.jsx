import "../styles/Services.css"
import Card from "../components/Card";
import Timeline from "../components/Timeline";

export default function Services(){

    const cardsData = [
    {
      image: "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      
      title: "Web Development",
      description: "We build responsive and dynamic websites using the latest technologies."
    },
    {
      image: "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      
      title: "Mobile Development",
      description: "Creating mobile applications for both Android and iOS platforms"
    },
    {
      image: "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      
      title: "Cloud Services",
      description: "Offering cloud solutions to ensure your business operates smoothly."
    },
    {
      image: "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      
      title: "Web Development",
      description: "We build responsive and dynamic websites using the latest technologies."
    }
  ]; 

    const processStages = [
        { stage: 'Initial Contact', description: 'Reach out to us with your project ideas.', icon: '📞' },
        { stage: 'Requirement Analysis', description: 'We analyze and understand your requirements.', icon: '📋' },
        { stage: 'Project Management', description: 'We manage the project efficiently.', icon: '📅' },
        { stage: 'Delivery', description: 'Delivering the project on time.', icon: '🚚' },
        { stage: 'Post-Delivery Support', description: 'Providing support even after project completion.', icon: '🔧' }
    ];

    return (
      <div className='services-page'>

        <div className='services-container'>
          <h1>Our Services</h1>
          <div className='subtitle'>
              <p> Earum error id voluptatum! ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
        </div>

            <div className='cards'>
                    {cardsData.map((data, index) => {
                        return (
                            <Card key={index} image={data.image} thumb={data.thumb} title={data.title} description={data.description} />
                        )
                    })}
            </div>
           
            <h1>Our Process</h1>
            <div className='process-overview'>
                {processStages.map((stage, index) => {
                    return (
                        <div key={index} className='process-stage'> 
                            <div className="stage-icon">{stage.icon}</div>
                            <h2>{stage.stage}</h2>
                            <p>{stage.description}</p>
                        </div>
                    )
                })}
            </div>
            <Timeline />
        </div>
    )
}
