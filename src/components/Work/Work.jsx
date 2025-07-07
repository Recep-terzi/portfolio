import { useEffect, useState } from 'react'
import './Work.Module.css'
import Container from '../Container/Container'

const Work = () => {
    const [myWork,setMyWork] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/api/projects').then(res => res.json()).then(data => setMyWork(data))
    },[])

    return (
        <div className="work__body" id="work">
            <Container>
                <span>Work</span>
                <p>Some of the noteworthy projects I have built:</p>
                {
                  myWork &&  myWork.map(work => (
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