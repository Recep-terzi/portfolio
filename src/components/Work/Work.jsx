import React from 'react'
import './Work.Module.css'
import Container from '../Container/Container'
import dietApp from '../../assets/dietapp.png'
import tusecApp from '../../assets/tusecapp.png'
import swapApp from '../../assets/swapapp.png'
import difoApp from '../../assets/difo.png'
import memeApp from '../../assets/memelaunchpad.png'
import linguetaApp from '../../assets/lingueta.png'

const Work = () => {
    const myWork = [
        {
            id: 1,
            projectImage: linguetaApp,
            projectTitle: "Lingueta",
            link:"https://lingueta.com",
            projectInfo: "I coded this project, which offers translation services in a professional and fun way, responsively in a user-friendly way using current technologies such as Next.js and Typescript.",
            projectMaterial: [
                "HTML",
                "CSS",
                "Javascript",
                "React",
                "Next.js",
                "Typescript",
                "Figma",
                "Firebase",
                "API",
                "Web Socket"
            ]
        },
        {
            id: 2,
            projectImage: difoApp,
            projectTitle: "Difo Launchpad",
            link:"https://difolaunchpad.com",
            projectInfo: "A professional project I developed during my work at Difo Finance. On this Launchpad platform, users can list their tokens, buy and sell them and stay informed about the current market situation. Next.js, Tailwind CSS, Typescript and many current technologies were used in this project, every detail of which was developed professionally.",
            projectMaterial: [
                "HTML",
                "CSS",
                "Javascript",
                "React",
                "Redux",
                "Next.js",
                "Typescript",
                "Zod",
                "Figma",
                "Web Socket"
            ]
        },
        {
            id: 3,
            projectImage: memeApp,
            projectTitle: "Meme Launchpad",
            link:"https://memelaunchpad.io",
            projectInfo: "On this Launchpad platform, users can list their meme tokens, buy and sell them, and stay informed about current market conditions. Next.js, Tailwind CSS, Typescript and many current technologies were used in this project, every detail of which was developed professionally.",
            projectMaterial: [
                "HTML",
                "CSS",
                "Javascript",
                "React",
                "Redux",
                "Next.js",
                "Typescript",
                "Zod",
                "Figma",
                "Web Socket"
            ]
        },
        {
            id: 4,
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
            id: 5,
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
            id: 6,
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
                        <a href={work.link ? work.link : ''} target='_blank' className="work__card" key={work.id}>
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
                        </a>
                    ))
                }
            </Container>
            <span>You can visit my github address to check out more of my projects.</span>
        </div>
    )
}

export default Work