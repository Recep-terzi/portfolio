import './App.css'
import Navbar from './components/Navbar/Navbar'
import { FaLocationDot, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import userImage from './assets/user.jpeg'
import About from './components/About/About';
import Container from './components/Container/Container';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import { Slide } from "react-awesome-reveal";

function App() {
 
  return (
    <>
      <Navbar />
      <Container>
        <div className="main">
          <div className="main__left">
            <h1>Hi, I'm Recep 👋</h1>
            <p>
              Trakya üniversitesi Bilgisayar Teknolojileri ve Bilişim Sistemleri 4.sınıf olarak öğrenim görmekteyim. Aktif olarak kendimi frontend alanında geliştirmekteyim. Günümüzdeki aktif frontend teknolojilerini kullanarak bu alanda her zaman bir seviye ileri geçmek en büyük gayem olmuştur.
            </p>
            <p>
              Hakkımda daha detaylı bilgi edinmek için aşağıya kaydırabilirsiniz. Teşekkür ederim. :)
            </p>
            <p>
              <FaLocationDot />
              Kocaeli, Darıca
            </p>
            <div className="social">
              <a href="https://github.com/Recep-terzi" target='_blank'><FaGithub /></a>
              <a href="https://www.linkedin.com/in/recepterzi/" target='_blank'><FaLinkedin /></a>
              <a href="https://www.instagram.com/recepterziiii/" target='_blank'><FaInstagram /></a>
            </div>
          </div>
          <div className="main__right">
            <img src={userImage} alt="" />
          </div>
        </div></Container>
      <Slide cascade><About /></Slide>
      <Slide cascade><Skills /></Slide>
      <Slide cascade><Experience /></Slide>
      <Slide cascade><Work /></Slide>
      <Slide cascade><Contact /></Slide>
    </>
  )
}

export default App
