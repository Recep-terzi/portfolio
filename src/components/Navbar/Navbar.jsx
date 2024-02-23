import React from 'react'
import './Navbar.Module.css'
// import { MdOutlineDarkMode } from "react-icons/md";
import Container from '../Container/Container';
import { useEffect } from 'react';
import { init } from "ityped";
import { useRef } from 'react';
import userCv from '../../assets/Recep Terzi - CV.pdf'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            startDelay: 100,
            typeSpeed: 50,
            strings: ["Welcome", "Recep Terzi", "Frontend Developer"],
        });
    }, []);
    return (
        <Container>
            <div className="navbar__main">
                <div className="navbar__left" ref={textRef}>
                </div>
                <div className="navbar__right">
                    <IoMenu className='responsive__button' onClick={() => setOpen(true)} />
                    <BottomSheet open={open} onDismiss={() => setOpen(false)}>
                        <div className="bottom__sheet__menu" >
                            <a href="#about">About</a>
                            <a href="#work">Work</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </BottomSheet>
                    <div className="navbar__link">
                        <a href="#about">About</a>
                        <a href="#work">Work</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="navbar__selection">
                        {/* <MdOutlineDarkMode /> */}
                        <a href={userCv} target='_blank'>Dowland CV</a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar