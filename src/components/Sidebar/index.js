import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
const Sidebar = () => (
  // <>Hello From Sidebar</>
  <div className='nav-bar'>
    <Link className ='logo' to='/'>
      <img src={LogoS} alt='logo'></img>
      <img className='sub-logo' src={LogoSubtitle} alt='Name'></img>
    </Link>
  </div>
)
export default Sidebar
