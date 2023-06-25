import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import '../Home/Logo/index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u', 'm', 'e', 'e', 't']
    const jobArray = ['F', 'u']
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                     <br />
                    I'm
                    <span className={`${letterClass} _13`}>I',</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>Spring Boot/ Java 8/ React Js/ JavaScript/ SQL</h2>
                <Link 
                    to="/contact" 
                    className="flat-button">
                        Contact Me
                </Link>
            </div>
            <Logo/>
        </div>
    )
}

export default Home