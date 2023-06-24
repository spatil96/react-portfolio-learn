import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
  // <>Hello From Sidebar</>
  <div className='nav-bar'>
    <Link className ='logo' to='/'>
      <img src={LogoS} alt='logo'></img>
      <img className='sub-logo' src={LogoSubtitle} alt='Sumeet'></img>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/" >
        <FontAwesomeIcon icon={faHome} color="#4d4de" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
        <FontAwesomeIcon icon={faUser} color="#4d4de" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4de" />
      </NavLink>
      </nav>
      <ul>
        <li>
          <a target='_blank' 
          rel='norefferrer' 
          href="https://www.linkedin.com/in/sumeet-p/">
            <FontAwesomeIcon icon ={faLinkedin} color='#4d4de'></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a target='_blank' 
          rel='norefferrer' 
          href="https://github.com/spatil96?tab=repositories">
            <FontAwesomeIcon icon ={faGithub} color='#4d4de'></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    
  </div>
)
export default Sidebar
