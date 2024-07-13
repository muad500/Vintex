import React, {useEffect, useState } from "react";
import "../styles/Home.css"

export default function Home(){

    const [projects, setProjects] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);
    const [years, setYears] = useState(0);

    useEffect(() => {
        const incremantCount = (target, setState) => {
            let count = 0;
            const increment = target / 200;
            const interval = setInterval(() => {
                count += increment;
                if(count >= target){
                    clearInterval(interval)
                    setState(target)
                }
                else{
                    setState(Math.ceil(count))
                }
            }, 10)
        }
        incremantCount(100, setProjects);
        incremantCount(95, setSatisfaction);
        incremantCount(10, setYears);
    }, [])

    return (
        <div class="background-image">
            <div class="overlay">
                <h1 class="tagline">Your Partner in Digital Excellence</h1>
                <div class="statistics">
                    <div class="stat-item">
                        <span id="completed-projects" class="counter">{projects}</span>
                        <p>Completed Projects</p>
                    </div>
                    <div class="stat-item">
                        <span id="client-satisfaction" class="counter">{satisfaction}%</span>
                        <p>Client Satisfaction Rate</p>
                    </div>
                    <div class="stat-item">
                        <span id="years-in-business" class="counter">{years}</span>
                        <p>Years in Business</p>
                    </div>
                </div>
            </div>
        </div>

    )
}