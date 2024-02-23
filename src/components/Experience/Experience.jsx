import React from 'react'
import './Experience.Module.css'
import optiimLogo from '../../assets/optiim.png'
import sahaRobotikLogo from '../../assets/sahaRobotik.png'
import jotformLogo from '../../assets/jotform.png'
import Container from '../Container/Container'
const Experience = () => {
    const myexperience = [
        {
            id: 1,
            companyLogo: jotformLogo,
            companyName: "Jotform",
            position: "Frontend Developer",
            date: "Tem 2023 - Eyl 2023",
            details: [
                "During my internship, I learned to use Ubuntu and WSL effectively in connecting to projects, and I actively used this skill throughout the internship.",
                "Demonstrated my proficiency in React by actively contributing to various projects, including larger-scale applications, and honing my frontend development expertise.", " By actively using artificial intelligence features in my projects, I have demonstrated my ability to integrate the power of artificial intelligence into real-world applications and encouraged innovation in my projects.", " I have improved my ability to do research and increased my skills to solve problems faster. In addition, I have gained experience in reporting research results.", " I learned how to commit in accordance with conventional commit rules and had the opportunity to explore the deeper functioning of Git"]
        },
        {
            id: 2,
            companyLogo: sahaRobotikLogo,
            companyName: "Saha Robotik",
            position: "Frontend Developer",
            date: "Mar 2023 - Haz 2023",
            details: [
                "I built an app with React.js",
            ]
        },
        {
            id: 3,
            companyLogo: optiimLogo,
            companyName: "Optiim",
            position: "Database Developer Intern",
            date: "Mar 2019 - May 2019",
            details: [
                "Since I studied database programming in high school, I did my internship at Optiim as a database developer."
            ]
        },
        
        
    ]
    return (
        <div className="experience__body" id='experience'>
            <Container>
                <span>Experience</span>
                <p>Here is a quick summary of my most recent experiences:</p>
                <div className="experience__card">
                    {myexperience.map(experience => (
                        <div key={experience.id} className='experience'>
                            <div className="company__logo">
                                <img src={experience.companyLogo} alt="" />
                            </div>
                            <div className="experience__detail">
                                <p>{experience.position}</p>
                                <ul>
                                    {
                                        experience.details.map(
                                            detail => (
                                                <li>
                                                    {detail}
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="experience__date">
                                {experience.date}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Experience