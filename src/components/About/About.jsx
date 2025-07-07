import React from 'react'
import './About.Module.css'
import Container from '../Container/Container'
import userImage from '../../assets/recepterzi.jpg'
import { Fade } from "react-awesome-reveal";
const About = () => {
    return (
        <Fade cascasde>
            <div
                className="about animate__animated animate__zoomIn" id='about'>
                <Container>
                    <span>About Me</span>
                    <div className="about__main">
                        <div className="about__left w-full h-full">
                            <img src={userImage} alt='User Image' />
                        </div>
                        <div className="about__right">
                            <h1>You want more information? Here you have it:</h1>
                            <p>I'm a passionate who specializesin frontend development. I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experince, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                            <p>I started my journey as a web developer in my early university years and since then I have continued to grow and develop as a developer, taking on new challenges and learning the latest technologies along the way. My previous experience and learning in different fields has helped me a lot in developing myself in my field. I am now actively developing professional projects and I am open to learning and developing bigger projects.</p>
                            <p>In my projects, I usually try to use modern technologies that can change according to the needs. These technologies include React, Redux, Next.js, Typescript, Tailwind CSS and much more.</p>
                            <p>As you can see in the experience section below, since I studied database programming in high school, I gained experience in a company as a Database Intern. Afterwards, I had a detailed Intern process in 3 different companies, 1 of which was not in my experience. Detailed information about this process is below.</p>
                            <p>For the rest of these experiences, I continued to develop projects in freelance platforms and companies, focusing on new technological developments.</p>
                            <p>One last thing, I'm avaliable for work, so feel free to reach out and say hello! 😊</p>
                        </div>
                    </div>
                </Container>
            </div></Fade>
    )
}

export default About