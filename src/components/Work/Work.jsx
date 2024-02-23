import React from 'react'
import './Work.Module.css'
import Container from '../Container/Container'
import dietApp from '../../assets/dietapp.png'
import tusecApp from '../../assets/tusecapp.png'
import swapApp from '../../assets/swapapp.png'

const Work = () => {
    const myWork = [
        {
            id: 1,
            projectImage: swapApp,
            projectTitle: "Swap App",
            projectInfo: "Responsively tuned swap website using React and redux. Authentication, Firestore Database, Firebase Storage are used. Reduxjs/toolkit is used for redux. There are also operations such as adding products, deleting products, editing products, sending exchange offers, and purchasing. I think it's a detailed react-redux project.",
            projectMaterial: [
                "HTML",
                "CSS",
                "Javascript",
                "React",
                "Redux",
                "Figma",
                "Firebase"
            ]
        },
        {
            id: 2,
            projectImage: tusecApp,
            projectTitle: "Tusec Website",
            projectInfo: "Hello. In this project, I am here with the website I made for TUSEC, the cyber security cluster of our school, in line with the needs. I think it is a detailed and beautiful website. It is a responsive website. Firebase auth, Firestore database... are used.",
            projectMaterial: [
                "HTML",
                "CSS",
                "Javascript",
                "React",
                "Redux",
                "Figma",
                "Firebase"
            ]
        },
        {
            id: 2,
            projectImage: dietApp,
            projectTitle: "Diet App",
            projectInfo: "A website that dietitians and users can use dynamically. Firebase authentication and firebase database were used on the backend. It was made as a university course project.",
            projectMaterial: [
                "HTML",
                "CSS",
                "Javascript",
                "React",
                "Redux",
                "Figma",
                "Firebase"
            ]
        }
    ]
    return (
        <div className="work__body" id="work">
            <Container>
                <span>Work</span>
                <p>Some of the noteworthy projects I have built:</p>
                {
                    myWork.map(work => (
                        <div className="work__card" key={work.id}>
                            <div className="card__left">
                                <img src={work.projectImage} alt="" />
                            </div>
                            <div className="card__right">
                                <p>{work.projectTitle}</p>
                                <p>{work.projectInfo}</p>
                                <div className="project__material">
                                    {
                                        work.projectMaterial.map(material => (
                                            <>
                                                <div>{material}</div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Container>
            <span>You can visit my github address to check out more of my projects.</span>
        </div>
    )
}

export default Work