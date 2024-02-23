import React from 'react'
import './Skills.Module.css'
import Container from '../Container/Container'
import htmlImage from '../../assets/html.png'
import cssImage from '../../assets/css.png'
import tailwindImage from '../../assets/tailwindcss.png'
import bootstrapImage from '../../assets/bootstrap.png'
import sassImage from '../../assets/sass.png'
import javascriptImage from '../../assets/javascript.png'
import reactImage from '../../assets/react.png'
import reduxImage from '../../assets/redux.png'
import nextjsImage from '../../assets/nextjs.png'
import figmaImage from '../../assets/figma.png'
import angularImage from '../../assets/angular.png'
import gitImage from '../../assets/git.png'
const Skills = () => {
    const mySkills = [
        {
            id: 1,
            name: 'HTML',
            image: htmlImage
        },
        {
            id: 2,
            name: 'CSS',
            image: cssImage
        },
        {
            id: 3,
            name: 'TailwindCss',
            image: tailwindImage
        },
        {
            id: 4,
            name: 'Bootstrap',
            image: bootstrapImage
        },
        {
            id: 5,
            name: 'Sass/Scss',
            image: sassImage
        },
        {
            id: 6,
            name: 'Javascript',
            image: javascriptImage
        },
        {
            id: 7,
            name: 'React',
            image: reactImage
        },
        {
            id: 8,
            name: 'Redux',
            image: reduxImage
        },
        {
            id: 9,
            name: 'Next.js',
            image: nextjsImage
        },
        {
            id: 10,
            name: 'Angular',
            image: angularImage
        }, {
            id: 11,
            name: 'Figma',
            image: figmaImage
        },
        {
            id: 12,
            name: 'Git',
            image: gitImage
        },
    ]
    return (
        <>
            <div className="skills" id='skills'>
                <Container>
                    <span>Skills</span>
                    <p>The skills, tools and technologies I am really good at:</p>
                    <div className="skills__body">
                        {
                            mySkills.map(skill => (
                                <div key={skill.id} className='skill__body'>
                                    <div className="skill__image">
                                        <img src={skill.image} alt="" />
                                    </div>
                                    <div className="skill__name">
                                        {skill.name}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Skills